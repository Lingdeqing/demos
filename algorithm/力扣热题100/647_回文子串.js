/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let res = 0
    for (let i = 0; i < s.length; i++) {
        const odd = palindrome(s, i, i)
        res += (odd + 1) >> 1
        if (i + 1 < s.length) {
            const even = palindrome(s, i, i + 1)
            res += (even + 1) >> 1
        }
    }
    return res
}
function palindrome(s, i, j) {
    while (i >= 0 && j < s.length && s[i] === s[j]) {
        i--;
        j++
    }
    return j - i - 1
}