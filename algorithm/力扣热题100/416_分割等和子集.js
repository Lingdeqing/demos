/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    let sum = nums.reduce((res, cur) => res += cur, 0)
    if (sum % 2 !== 0) return false
    sum /= 2
    // dp[i][j] 表示nums前i-1个物品是否能凑出重量j
    const dp = Array.from({ length: nums.length + 1 }, () => new Array(sum + 1).fill(false))
    // 边界：凑出0重量
    for (let i = 0; i < nums.length; i++) {
        dp[i][0] = true
    }
    for (let i = 1; i < nums.length + 1; i++) {
        for (let j = 1; j <= sum; j++) {
            if (j - nums[i - 1] < 0) {
                // 太大了，当前的不放进背包
                dp[i][j] = dp[i - 1][j]
            } else {
                // 当前的不放进背包 或者 当前放进背包
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]
            }
        }
    }
    return dp[nums.length][sum]
};

console.log(canPartition([1, 5, 11, 5]))