var longestPalindrome = function (s) {
    let res = ''
    for (let i = 0; i < s.length; i++) {
        let str = palindrome(s, i, i)
        if (res.length < str.length) res = str
        str = palindrome(s, i, i + 1)
        if (res.length < str.length) res = str
    }
    return res
}
function palindrome(s, i, j) {
    while (i >= 0 && j < s.length && s[i] === s[j]) {
        i--; j++;
    }
    return s.slice(i + 1, j)
}