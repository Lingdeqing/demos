// 48. 旋转图像

function rotate(matrix) {
    // ↘️ 对称
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[i].length; j++) {
            ;[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    // ➡️ 对称
    for (let i = 0; i < matrix.length; i++) {
        let m = 0, n = matrix[i].length - 1;
        while (m < n) {
            ;[matrix[i][m], matrix[i][n]] = [matrix[i][n], matrix[i][m]];
            m++;
            n--;
        }
    }
}
