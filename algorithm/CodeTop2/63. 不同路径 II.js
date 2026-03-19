// 63. 不同路径 II
// https://leetcode.cn/problems/unique-paths-ii/

// dfs穷举超时了
function uniquePathsWithObstacles(obstacleGrid) {
    let res = 0, onPath = {}
    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= obstacleGrid.length || j >= obstacleGrid[i].length || obstacleGrid[i][j] === 1 || onPath[i + ',' + j]) {
            return
        }
        if (i === obstacleGrid.length - 1 && j === obstacleGrid[i].length - 1) {
            res++
            return
        }
        onPath[i + ',' + j] = true
        dfs(i, j + 1)
        // dfs(i, j - 1)
        dfs(i + 1, j)
        // dfs(i - 1, j)
        onPath[i + ',' + j] = false
    }
    dfs(0, 0)
    return res
}


function uniquePathsWithObstacles2(obstacleGrid) {
    if (obstacleGrid.length === 0) return 0
    let memo = {}
    function dp(m, n) {
        if (obstacleGrid[m][n] === 1) return 0;
        if (m === 0 && n === 0) return 1;
        if (m + ',' + n in memo) return memo[m + ',' + n]
        memo[m + ',' + n] = 0
        if (n > 0) {
            memo[m + ',' + n] += dp(m, n - 1)
        }
        if (m > 0) {
            memo[m + ',' + n] += dp(m - 1, n)
        }
        return memo[m + ',' + n]
    }
    return dp(obstacleGrid.length - 1, obstacleGrid[0].length - 1)
}

console.log(uniquePathsWithObstacles2([[0, 0], [0, 1]]))