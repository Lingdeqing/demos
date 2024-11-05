// dp
var rob = function (nums) {

    // dp[i] 表示以i为起点[i, nums.length-1]中可以抢到的最大金额
    const dp = new Array(nums.length + 2).fill(0)
    for (let i = nums.length - 1; i >= 0; i--) {
        dp[i] = Math.max(
            dp[i + 1], // i位置不抢
            nums[i] + dp[i + 2] // i位置抢
        )
    }
    return dp[0]
};