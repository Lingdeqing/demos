// 63. 不同路径 II
// https://leetcode.cn/problems/unique-paths-ii/

// dfs穷举超时了
// function uniquePathsWithObstacles(obstacleGrid) {
//     let res = 0, onPath = {}
//     function dfs(i, j) {
//         if (i < 0 || j < 0 || i >= obstacleGrid.length || j >= obstacleGrid[i].length || obstacleGrid[i][j] === 1 || onPath[i + ',' + j]) {
//             return
//         }
//         if (i === obstacleGrid.length - 1 && j === obstacleGrid[i].length - 1) {
//             res++
//             return
//         }
//         onPath[i + ',' + j] = true
//         dfs(i, j + 1)
//         // dfs(i, j - 1)
//         dfs(i + 1, j)
//         // dfs(i - 1, j)
//         onPath[i + ',' + j] = false
//     }
//     dfs(0, 0)
//     return res
// }


function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    let memo: Record<string, number> = {}
    function dp(i: number, j: number): number {
        if (i < 0 || j < 0 || i >= obstacleGrid.length || j >= obstacleGrid[i].length) return 0
        if (obstacleGrid[i][j] === 1) return 0
        if (i === 0 && j === 0) return 1
        if (memo[i + ',' + j]) return memo[i + ',' + j]
        memo[i + ',' + j] = dp(i - 1, j) + dp(i, j - 1)
        return memo[i + ',' + j]
    }
    return dp(obstacleGrid.length - 1, obstacleGrid[0].length - 1)
};

console.log(uniquePathsWithObstacles2([[0, 0], [0, 1]]))