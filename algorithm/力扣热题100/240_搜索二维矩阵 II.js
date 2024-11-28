/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const row = matrix.length, col = matrix[0].length
    let i = 0, j = col - 1
    while (i < row && j >= 0) {
        if (matrix[i][j] === target) return true
        if (matrix[i][j] > target) j--;
        else if (matrix[i][j] < target) i++;
    }
    return false
};