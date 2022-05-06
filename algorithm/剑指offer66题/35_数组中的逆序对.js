/**
    题目：
        在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。
 */

// time: 
// space: 
// 归并
function reversePairs(nums) {
    let result = 0
    const temp = new Array(nums.length) // 临时数组，避免在递归过程中频繁开辟
    function mergeSort(nums, left, right) {
        if (left >= right) return
        // 划分
        const middle = left + Math.floor((right - left) / 2);
        mergeSort(nums, left, middle)
        mergeSort(nums, middle + 1, right)
        // 合并
        let i = left, j = middle + 1, k = 0;
        while (i <= middle && j <= right) {
            if (nums[i] > nums[j]) {
                temp[k++] = nums[j++]
                // 统计逆序对
                result += middle - i + 1
            } else {
                temp[k++] = nums[i++]
            }
        }
        // 左边剩余
        while (i <= middle) {
            temp[k++] = nums[i++]
        }
        // 右边剩余
        while (j <= right) {
            temp[k++] = nums[j++]
        }
        // 修改原数组
        for (let i = left, k = 0; i <= right; i++, k++) {
            nums[i] = temp[k]
        }
    }
    mergeSort(nums, 0, nums.length - 1)
    return result
}
// 暴力
function reversePairs(nums) {
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                result++
            }
        }
    }
    return result
}

