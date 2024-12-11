/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    let sum = nums.reduce((s, n) => s += n, 0)
    if (sum % 2 !== 0) return false
    sum /= 2

    // dp[i][j] 表示nums[0...i]中是否可以刚好凑出j的质量
    const dp = Array.from({ length: nums.length }, () => new Array(sum + 1).fill(false))
    // 边界：凑出0重量
    for (let i = 0; i < nums.length; i++) {
        dp[i][0] = true
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j <= sum; j++) {
            if (i === 0) {
                // 第0个是否正好重j
                dp[0][j] = j === nums[0]
            } else if (j - nums[i] < 0) {
                // 太大了，当前的不放进背包
                dp[i][j] = dp[i - 1][j]
            } else {
                // 当前的不放进背包 或者 当前放进背包
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]]
            }
        }
    }
    return dp[nums.length - 1][sum]
}

console.log(canPartition([1, 5, 11, 5]))