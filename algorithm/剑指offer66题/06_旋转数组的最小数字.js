/**
    题目：
        把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。 NOTE：给出的所有元素都大于0，若数组大小为0，请返回0
 */
function findMin(arr) {
    if (arr.length === 0) return 0
    let left = 0, right = arr.length - 1
    while (left <= right) {
        const middle = left + Math.floor((right - left) / 2)
        // 记住只能与arr[right]比较，与arr[left]不能确定情况来缩小区间
        if (arr[middle] > arr[right]) {
            left = middle + 1
        } else if (arr[middle] < arr[right]) {
            right = middle
        } else {
            right --
        }
    }
    return arr[left]
}


function findMin(arr) {
    if (arr.length === 0) return 0
    let left = 0, right = arr.length - 1
    while (left <= right) {
        const middle = left + Math.floor((right - left) / 2)
        if (arr[middle] > arr[left]) {
            right -- // 错了
            // 这边没法判断怎么缩小范围，基于以下两点矛盾了
            // 1. 可能单调递增，那么最小值就是left；
            // 2. 如果部分单调递增，则在右侧部分，也可能正好是right，不能right--
        } else if (arr[middle] < arr[left]) {
            right = middle
        } else {
            right = middle
        }
    }
    return arr[left]
}