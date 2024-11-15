/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    const min = new Array(nums.length) // min[i] 表示以nums[i]结尾的子数组的最小乘积
    const max = new Array(nums.length) // max[i] 表示以nums[i]结尾的子数组的最大乘积
    let res = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            min[i] = nums[i];
            max[i] = nums[i];
        } else {
            min[i] = Math.min(nums[i], nums[i] * min[i - 1], nums[i] * max[i - 1])
            max[i] = Math.max(nums[i], nums[i] * min[i - 1], nums[i] * max[i - 1])
        }
        res = Math.max(min[i], max[i], res);
    }
    return res;
};