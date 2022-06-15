// 694. 不同岛屿的数量

// 岛屿题解：https://labuladong.github.io/algo/4/29/106/
function numberofDistinctIslands(grid) {
    // dfs序列化
    function dfs(i, j, dir, sb) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === 0) return sb

        sb += dir + ','
        grid[i][j] = 0;
        sb = dfs(i, j + 1, 1, sb);
        sb = dfs(i, j - 1, 2, sb);
        sb = dfs(i + 1, j, 3, sb);
        sb = dfs(i - 1, j, 4, sb);
        sb += -dir + ','

        return sb
    }

    const set = new Set()
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                set.add(dfs(i, j, 666, ''))
            }
        }
    }

    return set.size
}