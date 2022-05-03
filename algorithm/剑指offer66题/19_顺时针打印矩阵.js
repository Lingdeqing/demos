/**
    题目：
        输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
 */
// time:
// space:
function walkMatrix(arr) {
    const m = arr.length, n = arr[0].length;
    let top = 0, bottom = m - 1, left = 0, right = n - 1;
    const result = []
    while (top <= bottom && left <= right) {
        // 向右
        if (top <= bottom) {
            for (let i = left; i <= right; i++) {
                result.push(arr[top][i])
            }
            top++
        }
        // 向下
        if (left <= right) {
            for (let i = top; i <= bottom; i++) {
                result.push(arr[i][right])
            }
            right--
        }
        // 向左
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(arr[bottom][i])
            }
            bottom--
        }
        // 向上
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(arr[i][left])
            }
            left++
        }
    }
    return result
}
