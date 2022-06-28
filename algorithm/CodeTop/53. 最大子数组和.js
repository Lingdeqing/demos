// 53. 最大子数组和
// https://leetcode.cn/problems/maximum-subarray/

function maxSubArray(nums) {
    const dp = [] // dp[i]表示以nums[i]结尾的最大子数组和
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) dp[i] = nums[0]
        else dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    }
    return Math.max(...dp)
}
// 每个状态只依赖于前一个状态
// 压缩空间版
function maxSubArray2(nums) {
    let dp, res = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) dp = nums[0]
        else dp = Math.max(dp + nums[i], nums[i])
        res = Math.max(dp, res)
    }
    return res
}