// https://www.nowcoder.com/practice/3cd4621963e8454594f00199f4536bb1


// 最长回文子串问题
function getLongestPalindrome(s) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        res = Math.max(res, getPalindrome(s, i, i))
        if (i + 1 < s.length) {
            res = Math.max(res, getPalindrome(s, i, i + 1))
        }
    }
    return res
}

function getPalindrome(s, i, j) {
    while (i >= 0 && j < s.length && s[i] === s[j]) {
        i--;
        j++;
    }
    return j - i - 1
}

console.log(getLongestPalindrome('ABBA'))