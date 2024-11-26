/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
    nums.push(1)
    nums.unshift(1)

    // dp[i][j] 表示开区间(i, j)之间气球戳破的最高收益
    const dp = Array.from({ length: nums.length }, () => new Array(nums.length).fill(0))
    for (let i = nums.length - 1; i >= 0; i--) {
        for (j = i + 1; j < nums.length; j++) {
            for (let k = i + 1; k < j; k++) {
                dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[k][j] + nums[i] * nums[j] * nums[k]);
            }
        }
    }
    return dp[0][nums.length - 1]
};