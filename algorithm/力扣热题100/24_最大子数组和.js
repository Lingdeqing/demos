// 53. 最大子数组和

// nums.length>=1
function maxSubArray(nums) {
    const dp = new Array(nums.length).fill(0) // dp[i]表示nums[i]结尾的连续子数组的最大和
    dp[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
    }
    return Math.max(...dp)
}
