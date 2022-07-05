// 300. 最长递增子序列
// https://leetcode.cn/problems/longest-increasing-subsequence/

function lengthOfLIS(nums) {
    let dp = [], res = 1 // dp[i]表示以第i个元素结尾的最长递增子序列的长度
    for (let i = 0; i < nums.length; i++) {
        dp[i] = 1
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        res = Math.max(dp[i], res)
    }
    return res
}