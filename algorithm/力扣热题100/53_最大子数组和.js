/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    // dp[i] 表示以i结尾的最大子数组和
    let res = -Infinity
    let dp_i = -Infinity
    for (let i = 0; i < nums.length; i++) {
        dp_i = Math.max(dp_i + nums[i], nums[i])
        res = Math.max(res, dp_i)
    }
    return res
};