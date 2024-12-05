/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const memo = {}
    // dp[i][j]表示word1[0...i]和word2[0...j]的最短编辑距离
    function dp(i, j) {
        if (i < 0 && j < 0) return 0
        if (i < 0) return j + 1
        if (j < 0) return i + 1
        const key = i + ',' + j
        if (memo[key]) return memo[key]


        let res
        if (word1[i] === word2[j]) {
            res = dp(i - 1, j - 1)
        } else {
            res = Math.min(
                dp(i, j - 1), // 在word1插入 或 word2删除
                dp(i - 1, j),// 在word2插入 或 word1删除
                dp(i - 1, j - 1),// 在word1或word2替换
            ) + 1
        }
        
        memo[key] = res
        return res
    }
    return dp(word1.length - 1, word2.length - 1)
};