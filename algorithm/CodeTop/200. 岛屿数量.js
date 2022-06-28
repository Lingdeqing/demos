// 200. 岛屿数量
// https://leetcode.cn/problems/number-of-islands/
function numIslands(grid) {

    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === "0") return

        grid[i][j] = "0"
        dfs(i, j + 1)
        dfs(i, j - 1)
        dfs(i + 1, j)
        dfs(i - 1, j)
    }

    let res = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                res++
                dfs(i, j)
            }
        }
    }
    return res
}