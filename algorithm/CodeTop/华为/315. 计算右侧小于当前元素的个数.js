// 315. 计算右侧小于当前元素的个数
// https://leetcode.cn/problems/count-of-smaller-numbers-after-self/

// 逆序又是归并，妈蛋可以和逆序对一起理解
// 题解：https://labuladong.github.io/algo/2/19/38/
function countSmaller2(nums) {
    const temp = new Array(nums.length)
    const count = new Array(nums.length).fill(0)
    nums = nums.map((item, index) => [item, index])
    // 将数值调整为数值+原始索引
    function mergeSort(arr, left, right) {
        if (left >= right) return;
        const middle = left + Math.floor((right - left) / 2)
        mergeSort(arr, left, middle)
        mergeSort(arr, middle + 1, right)
        for (let i = left; i <= right; i++) temp[i] = nums[i];
        for (let k = left, i = left, j = middle + 1; k <= right; k++) {
            if (i === middle + 1) {
                arr[k] = temp[j++]
            } else if (j === right + 1) {
                arr[k] = temp[i++]
                // 左侧有剩余 说明剩余的比右半部分都大
                count[arr[k][1]] += j - (middle + 1)
            } else if (temp[i][0] > temp[j][0]) {
                arr[k] = temp[j++]
            } else {
                arr[k] = temp[i++]
                // 此时说明右半部分j左边的是比当前第i个元素大的，计数
                count[arr[k][1]] += j - (middle + 1)
            }
        }
    }
    mergeSort(nums, 0, nums.length - 1)
    return count
}

// 归并排序模版，避免频繁开辟temp数组
// https://labuladong.github.io/algo/2/19/38/
function sort(nums) {
    const temp = new Array(nums.length)
    function mergeSort(arr, left, right) {
        if (left >= right) return;
        const middle = left + Math.floor((right - left) / 2)
        mergeSort(arr, left, middle)
        mergeSort(arr, middle + 1, right)
        for (let i = left; i <= right; i++) temp[i] = nums[i];
        for (let k = left, i = left, j = middle + 1; k <= right; k++) {
            if (i === middle + 1) {
                arr[k] = temp[j++]
            } else if (j === right + 1) {
                arr[k] = temp[i++]
            } else if (temp[i] > temp[j]) {
                arr[k] = temp[j++]
            } else {
                arr[k] = temp[i++]
            }
        }
    }
    mergeSort(nums, 0, nums.length - 1)
    return nums
}
// 暴力成功超时啦😄
function countSmaller(nums) {
    const res = []
    for (let i = 0; i < nums.length; i++) {
        res[i] = 0
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[i]) res[i]++
        }
    }
    return res
}