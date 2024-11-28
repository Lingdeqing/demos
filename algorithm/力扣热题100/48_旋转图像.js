/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    if (matrix.length === 0) return
    const row = matrix.length, col = matrix[0].length
    // 对角线反转
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    // 左右翻转
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col >> 1; j++) {
            [matrix[i][j], matrix[i][col - j - 1]] = [matrix[i][col - j - 1], matrix[i][j]];
        }
    }
};
