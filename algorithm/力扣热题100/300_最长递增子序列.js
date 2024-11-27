/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    // dp[i] 表示以第i元素结尾的最长递增子序列的长度
    // dp[i] = Math.max(dp[i-1]+1, dp[i-2]+1, ..., dp[0]+1)
    const dp = new Array(nums.length).fill(1)
    let res = -Infinity
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        res = Math.max(res, dp[i])
    }
    return res
};