// 二维有序数组中查找
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