var numIslands = function (grid) {
    if (grid.length === 0) return 0;
    let res = 0;
    const rows = grid.length
    const cols = grid[0].length;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                res++;
                dfs(grid, i, j)
            }
        }
    }
    return res;
};

function dfs(grid, i, j) {
    const rows = grid.length
    const cols = grid[0].length;
    if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] === '0') return
    grid[i][j] = '0';
    dfs(grid, i - 1, j);
    dfs(grid, i, j - 1);
    dfs(grid, i + 1, j);
    dfs(grid, i, j + 1);
}