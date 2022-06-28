// 1020. 飞地的数量
// https://leetcode.cn/problems/number-of-enclaves/

// 写的这么乱，还出错了
// 反其道而行之，从边界走，边界能走到的置0，最终剩下的就是边界走不到的，也就是走不出边界的飞地
// 岛屿问题
function numEnclaves(grid) {
    for (let i = 0; i < grid.length; i++) {
        dfs(i, 0)
        dfs(i, grid[i].length - 1)
    }
    for (let i = 0; i < grid[0].length; i++) {
        dfs(0, i)
        dfs(grid.length - 1, i)
    }
    let res = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                res++
            }
        }
    }
    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === 0) return;

        grid[i][j] = 0
        dfs(i, j + 1)
        dfs(i, j - 1)
        dfs(i + 1, j)
        dfs(i - 1, j)
    }
    return res
}