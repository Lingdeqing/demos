import json
import urllib.request
import urllib.parse

HEADERS = {
    "User-Agent": "Mozilla/5.0",
    "Accept": "*/*",
}

# https://quote.eastmoney.com/sz002163.html
KLINE_URL = "https://push2his.eastmoney.com/api/qt/stock/kline/get"


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

