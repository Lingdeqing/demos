// 5. 最长回文子串
// https://leetcode.cn/problems/longest-palindromic-substring/

function longestPalindrome(s) {
    let res = ''
    for (let i = 0; i < s.length; i++) {
        palindrome(s, i, i)
        if (i + 1 < s.length) {
            palindrome(s, i, i + 1)
        }
    }
    function palindrome(s, i, j) {
        while (i >= 0 && j < s.length && s[i] === s[j]) {
            i--;
            j++;
        }
        if (j - i - 1 > res.length) {
            res = s.slice(i + 1, j)
        }
    }
    return res
}