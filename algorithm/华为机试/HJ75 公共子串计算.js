// https://www.nowcoder.com/practice/98dc82c094e043ccb7e0570e5342dd1b

// 经典LCS问题

function commonSubStr(s1, s2) {
    if (s1.length < s2.length) {
        ;[s1, s2] = [s2, s1];
    }
    for (let len = s2.length; len > 0; len--) {
        for (let start = 0; start < s2.length - len + 1; start++) {
            const subStr = s2.slice(start, start + len)
            if (s1.includes(subStr)) {
                return len
            }
        }
    }
    return 0
}

function includes(s, t) {
    if (s.length < t.length) return false
    for (let i = 0; i < s.length - t.length + 1; i++) {
        for (let j = 0; j < t.length; j++) {
            if (s[i + j] !== t[j]) {
                break
            } else if (j === t.length - 1) {
                return true
            }
        }
    }
    return false
}
console.log(commonSubStr('ha',
    'a'))
