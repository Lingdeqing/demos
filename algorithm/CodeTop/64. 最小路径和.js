// 64. 最小路径和
// https://leetcode.cn/problems/minimum-path-sum/

function minPathSum(grid) {
    if (grid.length === 0) return 0
    let memo = {}
    function dp(i, j) {
        if (i === 0 && j === 0) return grid[0][0]
        if (i + ',' + j in memo) return memo[i + ',' + j];
        if (i === 0) memo[i + ',' + j] = dp(i, j - 1) + grid[i][j];
        else if (j === 0) memo[i + ',' + j] = dp(i - 1, j) + grid[i][j]
        else memo[i + ',' + j] = Math.min(dp(i - 1, j), dp(i, j - 1)) + grid[i][j]
        return memo[i + ',' + j]
    }
    return dp(grid.length - 1, grid[0].length - 1)
}