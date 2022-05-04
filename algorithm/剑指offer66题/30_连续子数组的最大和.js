/**
    题目：
        输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
 */

// time: 
// space: 
// arr.length > 0
// 动态规划
// 状态定义: dp[i] 表示以arr[i]结尾的连续数组的最大和
// 转移方程: dp[i] = dp[i-1]<=0 ? arr[i] : dp[i-1]+arr[i]
function maxSubArray(arr) {
    const dp = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        if (dp[i - 1] > 0) {
            dp[i] = dp[i - 1] + arr[i]
        } else { // 非正数对结果没有增益
            dp[i] = arr[i]
        }
    }
    return Math.max(...dp)
}
