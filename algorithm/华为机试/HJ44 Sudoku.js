// https://www.nowcoder.com/practice/78a1a4ebe8a34c93aac006c44f6bf8a1

function sudoku(matrix) {
    function dfs() {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (matrix[i][j] === 0) {
                    for (let k = 1; k <= 9; k++) {
                        matrix[i][j] = k
                        if (isValid(matrix, i, j) && dfs()) {
                            return true;
                        }
                    }
                    matrix[i][j] = 0
                    return false
                }
            }
        }
        return true
    }
    function isValid(matrix, i, j) {
        // 列
        for (let k = 0; k < 9; k++) {
            if (k !== j && matrix[i][k] === matrix[i][j]) {
                return false
            }
        }
        // 行
        for (let k = 0; k < 9; k++) {
            if (k !== i && matrix[k][j] === matrix[i][j]) {
                return false
            }
        }
        // 子矩阵
        const m = Math.floor(i / 3), n = Math.floor(j / 3)
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (i !== row + m * 3 && j !== n * 3 && matrix[i][j] === matrix[row + m * 3][col + n * 3]) {
                    return false
                }
            }
        }
        return true
    }
    return dfs()
}

console.log(sudoku(
    `0 9 2 4 8 1 7 6 3
4 1 3 7 6 2 9 8 5
8 6 7 3 5 9 4 1 2
6 2 4 1 9 5 3 7 8
7 5 9 8 4 3 1 2 6
1 3 8 6 2 7 5 9 4
2 7 1 5 3 8 6 4 9
3 8 6 9 1 4 2 5 7
0 4 5 2 7 6 8 3 1`.split('\n').map(row => row.split(' ').map(item => +item))))


// 回溯模版实现: https://labuladong.github.io/algo/4/29/107/
function sudoku2(matrix) {
    function dfs(i, j) {
        if (j === 9) {
            return dfs(i + 1, 0)
        }
        if (i === 9) {
            return true
        }
        if (matrix[i][j] !== 0) {
            return dfs(i, j + 1)
        }
        for (let k = 1; k <= 9; k++) {
            if (!isValid(matrix, i, j, k)) continue;
            matrix[i][j] = k;
            if (dfs(i, j + 1)) {
                return true
            }
            matrix[i][j] = 0;
        }
        return false
    }
    function isValid(matrix, i, j, v) {
        // 列
        for (let k = 0; k < 9; k++) {
            if (k !== j && matrix[i][k] === v) {
                return false
            }
        }
        // 行
        for (let k = 0; k < 9; k++) {
            if (k !== i && matrix[k][j] === v) {
                return false
            }
        }
        // 子矩阵
        const m = Math.floor(i / 3), n = Math.floor(j / 3)
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (i !== row + m * 3 && j !== n * 3 && v === matrix[row + m * 3][col + n * 3]) {
                    return false
                }
            }
        }
        return true
    }
    return dfs(0, 0)
}