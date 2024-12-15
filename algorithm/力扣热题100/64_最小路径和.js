/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    if (grid.length === 0) return 0
    // dp[i][j] 表示左上角到(i,j)坐标的最小路径和
    const dp = Array.from({ length: grid.length }, () => new Array(grid[0].length).fill(0))
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = grid[i][j]
            } else if (i === 0) {
                dp[i][j] = dp[i][j - 1] + grid[i][j]
            } else if (j === 0) {
                dp[i][j] = dp[i - 1][j] + grid[i][j]
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
            }
        }
    }
    return dp[grid.length - 1][grid[0].length - 1]
};



var minPathSum = function (grid) {
    const memo = new Map()
    // 从(i,j)到右下角的最小和
    function dp(i, j) {
        if (i >= grid.length || j >= grid[0].length) return Infinity
        if (i === grid.length - 1 && j === grid[0].length - 1) return grid[i][j]
        const key = i + ',' + j
        if (memo.has(key)) return memo.get(key)

        const res = Math.min(dp(i + 1, j),
            dp(i, j + 1)) + grid[i][j]
        memo.set(key, res)
        return res
    }

    return dp(0, 0)
}