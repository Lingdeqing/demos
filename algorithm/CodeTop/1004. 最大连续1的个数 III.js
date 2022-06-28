// 1004. 最大连续1的个数 III
// https://leetcode.cn/problems/max-consecutive-ones-iii/

// function longestOnes(nums, k) {
//     if (nums.length === 0) return 0
//     const dp = Array.from({ length: nums.length }, () => new Array(k + 1))// dp[i][k]表示nums[0...i]最多翻转k次后，1的后缀的长度
//     // bad case
//     // dp[0][0]
//     dp[0][0] = nums[0] === 1 ? 1 : 0
//     // dp[0][j>=1]
//     for (let j = 1; j <= k; j++) {
//         dp[0][j] = 1
//     }
//     // dp[i>=1][0]
//     for (let i = 1; i < nums.length; i++) {
//         dp[i][0] = dp[i - 1][0] + (nums[i] === 1 ? 1 : 0)
//     }
//     for (let i = 1; i < nums.length; i++) {
//         for (let j = 1; j <= k; j++) {
//             if (nums[i] === 1) {
//                 dp[i][j] = dp[i - 1][j] + 1
//             } else {
//                 dp[i][j] = dp[i - 1][j - 1] + 1
//             }
//         }
//     }

//     let res = 0;
//     for (let i = 0; i < nums.length; i++) {
//         res = Math.max(res, dp[i][k])
//     }
//     return res
// }

// 连续最长考虑滑动窗口
function longestOnes(nums, k) {
    let i = 0, j = 0, res = 0, win = [0, 0];
    while (j < nums.length) {
        win[nums[j]]++;
        j++
        while (win[0] > k) {
            win[nums[i]]--
            i++
        }
        res = Math.max(res, j - i)
    }
    return res
}