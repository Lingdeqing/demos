// 724. 寻找数组的中心下标
// https://leetcode.cn/problems/find-pivot-index/


// 前缀和
var pivotIndex = function (nums) {
    const prefixSum = [0] // prefixSum[i+1]表示[0,i]元素之和
    for (let i = 0; i < nums.length; i++) {
        prefixSum[i + 1] = nums[i] + prefixSum[i]
    }

    for (let i = 0; i < nums.length; i++) {
        if (prefixSum[i] === prefixSum[nums.length] - prefixSum[i + 1]) {
            return i
        }
    }

    return -1
};

var pivotIndex = function (nums) {
    const sum = nums.reduce((s, n) => s = s + n)
    let left = 0
    for (let i = 0; i < nums.length; i++) {
        if (left === sum - left - nums[i]) {
            return i
        }
        left += nums[i]
    }
    return -1
};