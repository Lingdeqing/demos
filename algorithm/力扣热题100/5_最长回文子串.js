// 5. 最长回文子串
// https://leetcode.cn/problems/longest-palindromic-substring/


// 以s[i]扩散出回文串
// 以s[i]和s[i+1]扩散出回文串
function longestPalindrome(s) {
    let maxLen = 0, res = null
    for (let i = 0; i < s.length; i++) {
        if (2 * (s.length - i - 1) + 1 < maxLen) continue // 跳过后面部分
        palindrome(s, i, i)
        if (i + 1 < s.length) {
            palindrome(s, i, i + 1)
        }
    }

    function palindrome(s, a, b) {
        while (a >= 0 && b < s.length && s[a] === s[b]) {
            a--;
            b++
        }
        if (maxLen < b - a - 1) {
            maxLen = b - a - 1
            res = [a + 1, b - 1]
        }
    }
    return maxLen > 0 ? s.slice(res[0], res[1] + 1) : ''
}


// 暴力
function longestPalindrome(s) {
    let maxLen = 0, res = null;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (isPalindrome(s, i, j) && j - i + 1 > maxLen) {
                maxLen = j - i + 1
                res = [i, j]
            }
        }
    }
    return maxLen > 0 ? s.slice(res[0], res[1] + 1) : ''
}

function isPalindrome(s, a, b) {
    for (let i = a, j = b; i < j; i++, j--) {
        if (s[i] !== s[j]) return false
    }
    return true
}

var longestPalindrome = function (s) {
    let maxLen = 0, ri = 0, rj = 0
    for (let i = 0; i < s.length; i++) {
        palindrome(s, i, i)
        if (i + 1 < s.length) {
            palindrome(s, i, i + 1)
        }
    }
    function palindrome(s, i, j) {
        while (i >= 0 && j < s.length && s[i] === s[j]) {
            i--;
            j++
        }
        const len = j - i - 1
        if (len > maxLen) {
            maxLen = len
            ri = i + 1
            rj = j - 1
        }
    }
    return maxLen > 0 ? s.slice(ri, rj + 1) : ''
};

console.log(longestPalindrome("babad"
))
