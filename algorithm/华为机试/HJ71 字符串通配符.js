// https://www.nowcoder.com/practice/43072d50a6eb44d2a6c816a283b02036


// 递归写法，写起来简洁，但是可能会超时
function isMatch2(s, p) {
    if (!s && !p) return true; // 都为空
    if (!p) return false; // 模式串为空
    if (!s) { // 字符串为空
        for (let ch of p) {
            if (ch !== '*' && ch !== '?') return false
        }
        return true
    };
    if (p[0] === '?') {
        return isWord(s[0]) && isMatch2(s.slice(1), p.slice(1))
    } else if (p[0] === '*') {
        return (isWord(s[0]) && isMatch2(s.slice(1), p.slice(1))) // 匹配1次
            || (isWord(s[0]) && isMatch2(s.slice(1), p))// 匹配>1次
            || isMatch2(s, p.slice(1)) // 匹配0次
    } else if (letterEq(p[0], s[0])) {
        return isMatch2(s.slice(1), p.slice(1))
    }
    return false
}
// 动态规划
function isMatch(s, p) {
    const m = s.length + 1, n = p.length + 1;
    const dp = new Array(m);
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n).fill(false)
    }
    dp[0][0] = true
    // dp[>0][0] = false
    // dp[0][>0]
    for (let i = 1; i < n; i++) {
        dp[0][i] = dp[0][i - 1] && p[i - 1] === '*'
    }

    // dp[>0][>0]
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (p[j - 1] === '*') {
                if (isWord(s[i - 1]) && dp[i - 1][j]) {
                    dp[i][j] = true
                } else if (dp[i][j - 1]) {
                    dp[i][j] = true
                }
            } else if (p[j - 1] === '?') {
                if (isWord(s[i - 1]) && dp[i - 1][j - 1]) {
                    dp[i][j] = true
                }
            } else if (letterEq(p[j - 1], s[i - 1])) {
                dp[i][j] = dp[i - 1][j - 1]
            }
        }
    }
    return dp[m - 1][n - 1]
}
function letterEq(a, b) {
    return a.toLowerCase() === b.toLowerCase()
}
function isWord(ch) {
    return (ch >= '0' && ch <= '9') || (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')
}

console.log(isMatch(
    // 'txt12.xls',
    // 't?t*1*.*',
    // 'txt12.xls',
    // 'te?t*.*'
    'hhhhhhhahhaahhahhhhaaahhahhahaaahhahahhhahhhahaaahaah',
    'h*h*ah**ha*h**h***hha',
    // '13',
    // '*123'
))