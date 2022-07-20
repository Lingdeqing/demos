// 1260. 二维网格迁移
// https://leetcode.cn/problems/shift-2d-grid/

function shiftGrid(grid, k) {
    const m = grid.length, n = grid[0].length
    while (k--) {
        let temp = grid[m - 1][n - 1]
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                [temp, grid[i][j]] = [grid[i][j], temp];
            }
        }
    }
    return grid
}

function shiftGrid2(grid, k) {
    const m = grid.length, n = grid[0].length
    const arr = new Array(m * n)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            arr[(i * n + j + k) % (m * n)] = grid[i][j]
        }
    }
    arr.forEach((item, index) => {
        grid[Math.floor(index / n)][index % n] = item
    })
    return grid
}

function shiftGrid3(grid, k) {
    const m = grid.length, n = grid[0].length
    const res = Array.from({ length: m }, () => new Array(n))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const index = (i * n + j + k) % (m * n)
            res[Math.floor(index / n)][index % n] = grid[i][j]
        }
    }
    return res
}