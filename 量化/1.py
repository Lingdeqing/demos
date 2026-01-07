import json
import urllib.request
import urllib.parse
import time
import traceback

#https://quote.eastmoney.com/center/gridlist.html#hs_a_board
LIST_URL = "https://push2.eastmoney.com/api/qt/clist/get" 

PARAMS = {
    "np": 1,
    "fltt": 1,
    "invt": 2,
    "fs": (
        "m:0+t:6+f:!2,"
        "m:0+t:80+f:!2,"
        "m:1+t:2+f:!2,"
        "m:1+t:23+f:!2,"
        "m:0+t:81+s:262144+f:!2"
    ),
    "fields": (
        "f12,f13,f14,f1,f2,f4,f3,f152,f5,f6,f7,"
        "f15,f18,f16,f17,f10,f8,f9,f23"
    ),
    "fid": "f3",
    "po": 1,
    "dect": 1,
    "ut": "fa5fd1943c7b386f172d6893dbfba10b",
    "wbp2u": "|0|0|0|web",
    "pz": 100,   # 每页 200（安全值）
}

HEADERS = {
    "User-Agent": "Mozilla/5.0",
    "Accept": "*/*",
}

def fetch_page(page):
    params = PARAMS.copy()
    params["pn"] = page

    url = LIST_URL + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers=HEADERS)

    with urllib.request.urlopen(req, timeout=10) as resp:
        text = resp.read().decode("utf-8")

    # 接口可能返回 JSON 或 JSONP
    if text.startswith("{"):
        data = json.loads(text)
    else:
        # JSONP: cb({...})
        start = text.find("(") + 1
        end = text.rfind(")")
        data = json.loads(text[start:end])

    return data["data"]

# https://quote.eastmoney.com/sz002163.html
KLINE_URL = "https://push2his.eastmoney.com/api/qt/stock/kline/get"

def fetch_all_stocks():
    all_rows = []
    # page = 54
    page = 1

    while True:
        data = fetch_page(page)
        if not data:
            break
        diff = data.get("diff", [])

        if not diff:
            break

        all_rows.extend(diff)

        print(f"已拉取第 {page} 页，累计 {len(all_rows)} 条")

        if page >= data.get("total", 1):
            break

        page += 1
        time.sleep(0.2)  # 防止过快

    return all_rows


def parse_jsonp(text, callback_prefix="jsonp1767611448796"):
    """
    安全解析 JSONP 返回的文本，返回 dict
    """
    # 找到开头 "("
    start = text.find(callback_prefix + "(")
    if start >= 0:
        start += len(callback_prefix) + 1  # 跳过 callback(
        end = text.rfind(")")               # 去掉最后的 )
        text = text[start:end]

    text = text.strip()  # 去掉多余空格或换行
    return json.loads(text)

def fetch_ma10(secid, max_bars=40):
    params = {
        "fields1": "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13",
        "fields2": "f51,f52,f53,f54,f55,f56,f57,f58,f59,f60,f61",
        "beg": 0,
        "end": 20500101,
        "ut": "fa5fd1943c7b386f172d6893dbfba10b",
        "rtntype": 6,
        "secid": secid,
        "klt": 101,
        "fqt": 1,
        "cb": "callback123",  # JSONP 回调，可以随便写
    }

    url = KLINE_URL + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=10) as r:
        text = r.read().decode()

    # 去掉 JSONP
    # print(text)
    data = parse_jsonp(text, "callback123")
    klines = data.get("data", {}).get("klines", [])

    # 只保留最近 max_bars 根
    klines = klines[-max_bars:]

    closes = [] # 收盘价
    volumes = [] # 成交量
    lows = [] # 最低价
    pcts = [] # 涨跌停
    for k in klines:
        parts = k.split(",")
        if len(parts) < 6:
            continue

        close = parts[2]   # 收盘价
        vol = parts[5]     # 成交量
        low = parts[4]
        pct = parts[8]

        if close in ("", "-") or vol in ("", "-"):
            continue

        try:
            closes.append(float(close))
            volumes.append(float(vol))
            lows.append(float(low))
            pcts.append(float(pct))
        except ValueError:
            continue
    
    def ma(n):
        return sum(closes[-n:]) / n if len(closes) >= n else None

    
    ma10 = ma(10)
    ma20 = ma(20)
    ma30 = ma(30)
    vol_today = volumes[-1]
    vol_ma10 = sum(volumes[-10:]) / 10
    low_today = lows[-1]

    recent_pcts = pcts[-20:] if len(pcts) >= 20 else pcts
    has_limit_up = any(pct >= 9.8 for pct in recent_pcts)

    return {
        "ma10": ma10,
        "ma20": ma20,
        "ma30": ma30,
        "vol_today": vol_today,
        "vol_ma10": vol_ma10,
        "low_today": low_today,
        "has_limit_up": has_limit_up
    }

def to_float(v):
    try:
        return float(v)
    except (TypeError, ValueError):
        return None
    
def has_recent_limit_up(klines, min_days=5, max_days=20):
    for i in range(-max_days, -min_days):
        pct = float(klines[i].split(",")[8])
        if pct >= 9.8:
            return True
    return False

    
if __name__ == "__main__":
    stocks = fetch_all_stocks()
    print(f"全市场股票数：{len(stocks)}")

    # 👉 核心：只筛下跌的
    down_stocks = [
        s for s in stocks  
        if to_float(s["f3"]) is not None
          and to_float(s["f3"]) < 0
          and to_float(s["f2"]) is not None
          and to_float(s["f2"])/100 <= 50
          and not (s.get("f14","").upper().startswith("ST") or s.get("f14","").upper().startswith("*ST"))

    ]

    print(f"当前下跌股票数：{len(down_stocks)}\n")

    # 打印前 20 条看看
    # for s in down_stocks[:20]:
    #     print(
    #         f"{s['f12']} {s['f14']:<6} "
    #         f"现价:{s['f2']/100} "
    #         f"涨跌幅:{s['f3']/100}%"
    #     )

    # 筛选靠近 MA10 1.03 的股票
    result = []
    for s in down_stocks:
        secid = f"{s['f13']}.{s['f12']}"
        try:
            # info = fetch_ma10("0.002598")
            info = fetch_ma10(secid)
            if info is None or info["ma10"] or info["ma20"] or info["ma30"] is None:
                continue
            
            is_shrinking = info["vol_today"] / info["vol_ma10"] < 0.7
            ratio = s["f2"]/100 / info["ma10"]

            # 影线不能太夸张
            is_good_pullback = (info["ma10"] - info["low_today"]) / info["ma10"] < 0.03

            if is_shrinking and is_good_pullback:
              print(
                  f"{s['f12']} {s['f14']:<6}\t"
                  f"现价:{s['f2']/100}\t"
                  f"涨跌幅:{s['f3']/100}%\t"
                  f"10日线:{round(info["ma10"], 2)}\t"
                  f"缩量:{is_shrinking}\t"
                  f"ratio:{round(ratio,3)}\t"
              )
            if is_good_pullback and is_shrinking and info["ma10"] > info["ma20"] and info["ma20"] > info["ma30"] and ratio <= 1.04 and s["f2"]/100 > info["ma10"]:
                s.update({"ma10": round(info["ma10"],2), "ratio": round(ratio,3), "has_limit_up": info["has_limit_up"]})
                result.append(s)
        except Exception as e:
            print(f"Exception for {s['f12']}: {e}")
            traceback.print_exc()
            break
        time.sleep(0.15)  # 避免请求过快


    result.sort(key=lambda x: x.get("has_limit_up", False), reverse=True)

    print(f"\n筛选出靠近 MA10 的股票数：{len(result)}\n")
    for s in result:
        print(
          f"{s['f12']} {s['f14']:<6}\t"
          f"现价:{s['f2']/100}\t"
          f"涨跌幅:{s['f3']/100}%\t"
          f"10日线:{round(s["ma10"], 2)}\t"
          f"ratio:{round(s['ratio'],3)}\t"
          f"近期涨停:{s["has_limit_up"]}\t"
        )
