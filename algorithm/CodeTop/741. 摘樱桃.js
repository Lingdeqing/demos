// 741. 摘樱桃
// https://leetcode.cn/problems/cherry-pickup/

// function cherryPickup(grid) {
//     let dir = 1, res = 0
//     function backtrack(cherry, i, j) {
//         if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === -1) {
//             return false
//         }
//         if (grid.length === 1) {
//             res = Math.max(res, grid[0][0])
//             return
//         }
//         if (i === grid.length - 1 && j === grid[i].length - 1) {
//             dir = -1
//         }
//         if (i === 0 && j === 0 && dir === -1) {
//             res = Math.max(cherry, res)
//             return
//         }

//         if (grid[i][j] === 1) {
//             grid[i][j] = 0
//             backtrack(cherry + 1, i, j + dir)
//             backtrack(cherry + 1, i + dir, j)
//             grid[i][j] = 1
//         } else {
//             backtrack(cherry, i, j + dir)
//             backtrack(cherry, i + dir, j)
//         }
//     }
//     backtrack(0, 0, 0)
//     return res
// }

// https://leetcode.cn/problems/cherry-pickup/solution/by-ac_oier-pz7i/
function cherryPickup(grid) {
    const n = grid.length
    // dp[k][i][j] 同时走了k步，第一个人在第i行，第二个人在第j行时走到终点最大的殷桃数
    const dp = Array.from({ length: 2 * n - 1 },
        () => Array.from({ length: n }, () => new Array(n).fill(-Infinity)))
    dp[0][0][0] = grid[0][0]
    for (let k = 1; k < 2 * n - 1; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                let i_j = k - i, j_j = k - j
                if (i_j < 0 || j_j < 0 || i_j >= n || j_j >= n) continue;
                if (grid[i][i_j] === -1 || grid[j][j_j] === -1) continue;
                dp[k][i][j] = dp[k - 1][i][j]
                if (i > 0) dp[k][i][j] = Math.max(dp[k][i][j], dp[k - 1][i - 1][j])
                if (j > 0) dp[k][i][j] = Math.max(dp[k][i][j], dp[k - 1][i][j - 1])
                if (i > 0 && j > 0) dp[k][i][j] = Math.max(dp[k][i][j], dp[k - 1][i - 1][j - 1])
                dp[k][i][j] += grid[i][i_j]
                if (i !== j) dp[k][i][j] += grid[j][j_j]
            }
        }
    }
    return Math.max(dp[2 * (n - 1)][n - 1][n - 1], 0)
}

console.log(cherryPickup([[1]]))