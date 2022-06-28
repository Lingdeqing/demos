// 516. 最长回文子序列
// https://leetcode.cn/problems/longest-palindromic-subsequence/

// 注意：这边是子序列，不是子串😁
// 题解：https://appktavsiei5995.pc.xiaoe-tech.com/detail/i_62987943e4b01c509ab8b6aa/1?from=p_629871eee4b01a48520729f7&type=6&parent_pro_id=
function longestPalindromeSubseq(s) {
    const dp = [] // dp[i][j] 指[i...j]的最长回文子序列的长度
    // bad case
    for (let i = 0; i < s.length; i++) {
        dp[i] = new Array(s.length).fill(0)
        dp[i][i] = 1
    }

    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
            }
        }
    }

    return dp[0][s.length - 1]
}

console.log(longestPalindromeSubseq("bbbab"))