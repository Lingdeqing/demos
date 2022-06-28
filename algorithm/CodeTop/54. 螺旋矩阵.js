// 54. 螺旋矩阵
// https://leetcode.cn/problems/spiral-matrix/
function spiralOrder(matrix) {
    let left = 0, right = matrix[0].length - 1,
        top = 0, bottom = matrix.length - 1,
        res = []
    while (left <= right && top <= bottom) {
        if (left <= right && top <= bottom) {
            for (let i = left; i <= right; i++) {
                res.push(matrix[top][i])
            }
            top++
        }
        if (left <= right && top <= bottom) {
            for (let i = top; i <= bottom; i++) {
                res.push(matrix[i][right])
            }
            right--
        }
        if (left <= right && top <= bottom) {
            for (let i = right; i >= left; i--) {
                res.push(matrix[bottom][i])
            }
            bottom--
        }
        if (left <= right && top <= bottom) {
            for (let i = bottom; i >= top; i--) {
                res.push(matrix[i][left])
            }
            left++
        }
    }
    return res
}

// 转置法
/**
 a1,1 a1,2 a1,3     a1,1 a2,1 a3,1
 a2,1 a2,2 a2,3  => a1,2 a2,2 a3,2
 a3,1 a3,2 a3,3     a1,3 a2,3 a3,3
 观察到最右侧一列 转置 后跑到了最后一行
 可以每次先取出第一行，
 然后转置剩下的行后倒序，循环处理
 */
function spiralOrder2(matrix) {
    let res = []
    while (matrix.length > 0) {
        res.push(...matrix[0])
        matrix = matrixT(matrix.slice(1)).reverse()
    }
    res
}
function matrixT(matrix) {
    let res = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (!res[j]) res[j] = [];
            res[j][i] = matrix[i][j]
        }
    }
    return res
}
console.log(spiralOrder2([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]))