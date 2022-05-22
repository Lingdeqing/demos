// https://www.nowcoder.com/practice/2c81f88ecd5a4cc395b5308a99afbbec

// 不用Map
function longestNumSubStr(s) {
    let res = '', maxLen = 0, i = 0;
    while (i < s.length) {
        if (isNum(s[i])) {
            let j = i;
            while (i < s.length && isNum(s[i])) i++;
            if (i - j > maxLen) {
                maxLen = i - j;
                res = s.slice(j, i)
            } else if (i - j === maxLen) {
                res += s.slice(j, i)
            }
        } else {
            i++
        }
    }
    function isNum(c) {
        return c >= '0' && c <= '9'
    }
    return [res, maxLen]
}

// 使用Map
function longestNumSubStr(s) {
    let res = new Map(), maxLen = 0, i = 0;
    while (i < s.length) {
        if (isNum(s[i])) {
            let j = i;
            while (i < s.length && isNum(s[i])) i++;
            if (i - j >= maxLen) {
                maxLen = i - j;
                if (!res.has(maxLen)) {
                    res.set(maxLen, [])
                }
                res.get(maxLen).push(s.slice(j, i))
            }
        } else {
            i++
        }
    }
    function isNum(c) {
        return c >= '0' && c <= '9'
    }
    return [res.get(maxLen), maxLen]
}
