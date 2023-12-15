// 10. 正则表达式匹配

// dp
function isMatch(s, p) {
    const m = s.length + 1, n = p.length + 1;
    const dp = []
    for (let i = 0; i < m; i++) {
        dp.push(new Array(n).fill(false))
    }
    // 字符串、模式串长度都为0
    dp[0][0] = true
    // 字符串长度为0、模式串非0
    for (let j = 2; j < n; j += 2) {
        dp[0][j] = dp[0][j - 2] && p[j - 1] === '*'
    }
    // 字符串长度非0、模式串为0
    // for (let i = 0; i < m; i++) {
    //     dp[i][0] = false
    // }

    // 递推
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (p[j - 1] === '*') {
                if (j >= 2) {

                    if ((p[j - 2] === '.' || p[j - 2] === s[i - 1]) && dp[i - 1][j]) {
                        dp[i][j] = true
                    } else if (dp[i][j - 2]) {
                        dp[i][j] = true
                    }
                }
            } else {
                if ((p[j - 1] === '.' || p[j - 1] === s[i - 1]) && dp[i - 1][j - 1]) {
                    dp[i][j] = true
                }
            }
        }
    }
    return dp[m - 1][n - 1]
}


var isMatch = function(s, p) {
    
};