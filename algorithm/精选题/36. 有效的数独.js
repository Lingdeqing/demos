// 36. 有效的数独
// https://leetcode.cn/problems/valid-sudoku/


/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

    for (let i = 0; i < 9; i++) {
        let set = new Set()
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') continue
            if (set.has(board[i][j])) return false
            set.add(board[i][j])
        }
    }

    for (let i = 0; i < 9; i++) {
        let set = new Set()
        for (let j = 0; j < 9; j++) {
            if (board[j][i] === '.') continue
            if (set.has(board[j][i])) return false
            set.add(board[j][i])
        }
    }

    for (let a = 0; a < 3; a++) {
        for (b = 0; b < 3; b++) {
            let set = new Set()
            let k = 9 * 3 * a + 3 * b
            let m = Math.floor(k / 9), n = k % 9;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (board[m + i][n + j] === '.') continue
                    if (set.has(board[m + i][n + j])) return false
                    set.add(board[m + i][n + j])
                }
            }
        }
    }
    return true
};


var isValidSudoku = function (board) {
    const rows = Array.from({ length: 9 }, () => new Set())
    const columns = Array.from({ length: 9 }, () => new Set())
    const boxes = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => new Set()))

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') continue
            if (rows[i].has(board[i][j])) return false
            rows[i].add(board[i][j])
            if (columns[j].has(board[i][j])) return false
            columns[j].add(board[i][j])
            if (boxes[~~(i / 3)][~~(j / 3)].has(board[i][j])) return false
            boxes[~~(i / 3)][~~(j / 3)].add(board[i][j])
        }
    }
    return true
};
// 9*(3*0)+3*0, 9*0+3*1, 9*0+3*2,
// 9*(3*1)+3*0, 9*3+3*1, 9*3+3*2, 
// 9*(3*2), 54+3