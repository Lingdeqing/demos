import json
import urllib.request
import urllib.parse
import time
import traceback
from ma import fetch_ma10


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
    "fid": "f6",
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
        return all_rows[:20]

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

def to_float(v):
    try:
        return float(v)
    except (TypeError, ValueError):
        return None

    
if __name__ == "__main__":
    start = time.perf_counter()
    stocks = fetch_all_stocks()

    stocks.sort(key=lambda x: x.get("f6", False), reverse=True)
    stocks = stocks[:20]
    print(f"全市场成交额前20：")
    for s in stocks:
        print(
            f"{s['f12']} {s['f14']:<6}\t"
            f"现价:{s['f2']/100}\t"
            f"涨跌幅:{s['f3']/100}%\t"
            f"成交额:{round(s['f6']/100000000, 2)}亿\t"
        )

    stocks = [
        s for s in stocks  
        if to_float(s["f3"]) is not None
          and to_float(s["f3"]) > 0
          and to_float(s['f2']/100) <=50
    ]

    print(f"\n涨幅超过5%：")
    up_stocks = [
        s for s in stocks  
        if to_float(s["f3"]) is not None
          and to_float(s['f3']/100) >=5
    ]
    for s in up_stocks:
        print(
            f"{s['f12']} {s['f14']:<6}\t"
            f"现价:{s['f2']/100}\t"
            f"涨跌幅:{s['f3']/100}%\t"
                    f"成交额:{round(s['f6']/100000000, 2)}亿\t"
        )

    def vol_level(r):
        if r < 1.3:
            return "普通放量"
        elif r < 2:
            return "明显放量"
        elif r < 3:
            return "主力大幅进场"
        elif r < 4.0:
            return "巨量"
        else:
            return "⚠️ 极端放量（警惕派发）" #小心主力在高位卖票给你
    print(f"\n放量上涨的：")
    for s in stocks:
        secid = f"{s['f13']}.{s['f12']}"
        try:
            info = fetch_ma10(secid)
            if info["ma30"] is None:
                continue
            
            vol_ratio = info["vol_today"] / info["vol_ma10"]
            if vol_ratio >= 1.2: 
                print(
                    f"{s['f12']} {s['f14']:<6}\t"
                    f"现价:{s['f2']/100}\t"
                    f"涨跌幅:{s['f3']/100}%\t"
                    f"成交额:{round(s['f6']/100000000, 2)}亿\t"
                    f"{vol_level(vol_ratio)}\t\t{vol_ratio}\t"
                )

        except Exception as e:
            print(f"Exception for {s['f12']}: {e}")
            traceback.print_exc()
            break
        time.sleep(0.15)  # 避免请求过快
