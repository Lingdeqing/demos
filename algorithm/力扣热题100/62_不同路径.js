/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const memo = {}
    // dp[i][j]表示从左上角到当前位置的路径数量
    function dp(i, j) {
        if (i === 0 && j === 0) return 1
        const key = i + ',' + j
        if (memo[key]) return memo[key]
        let res
        if (i === 0) {
            res = dp(i, j - 1)
        } else if (j === 0) {
            res = dp(i - 1, j)
        } else {
            res = dp(i - 1, j) + dp(i, j - 1)
        }
        memo[key] = res
        return res
    }
    return dp(m - 1, n - 1)
};