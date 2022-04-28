/**
    题目：
        在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数
 */
function find(arr, target) {
    if (!arr || arr.length === 0) return false
    let row = 0, col = arr[0].length - 1
    while (row < arr.length && col >= 0) {
        if (target < arr[row][col]) {
            col--
        } else if (target > arr[row][col]) {
            row++
        } else {
            return true
        }
    }
    return false
}