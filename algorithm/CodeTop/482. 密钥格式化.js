// 482. 密钥格式化
// https://leetcode.cn/problems/license-key-formatting/

function licenseKeyFormatting(s, k) {
    let res = ''
    for (let i = s.length - 1, j = 0; i >= 0; i--) {
        if (s[i] === '-') continue
        res = s[i].toUpperCase() + res
        j++
        if (j === k) {
            res = '-' + res
            j = 0
        }
    }
    return res[0] === '-' ? res.slice(1) : res
}