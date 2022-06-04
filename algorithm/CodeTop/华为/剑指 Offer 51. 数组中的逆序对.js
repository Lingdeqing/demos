// 剑指 Offer 51. 数组中的逆序对
// https://leetcode.cn/problems/shu-zu-zhong-de-ni-xu-dui-lcof/

function reversePairs(nums) {
    let res = 0
    function mergeSort(nums, left, right) {
        if (left >= right) return
        const middle = left + Math.floor((right - left) / 2)
        mergeSort(nums, left, middle)
        mergeSort(nums, middle + 1, right)

        let temp = [], i = left, j = middle + 1;
        while (i <= middle && j <= right) {
            if (nums[i] <= nums[j]) {
                temp.push(nums[i])
                i++
            } else {
                // 统计逆序对数
                res += middle - i + 1
                temp.push(nums[j])
                j++
            }
        }

        while (i <= middle) temp.push(nums[i++])
        while (j <= right) temp.push(nums[j++])
        for (let k = left, i = 0; k <= right; k++) {
            nums[k] = temp[i++]
        }
    }

    mergeSort(nums, 0, nums.length - 1)
    return res
}