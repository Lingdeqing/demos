// 152. 乘积最大子数组
// https://leetcode.cn/problems/maximum-product-subarray/

// 题解：参考 53.最大子数组和
// 但是乘积会有负数影响，当 负数*最小的数 才是当前位置最大的数字
// https://leetcode.cn/problems/maximum-product-subarray/solution/cheng-ji-zui-da-zi-shu-zu-by-leetcode-solution/
// function maxProduct(nums) {
//     let dp = [], res = -Infinity;
//     for (let i = 0; i < nums.length; i++) {
//         if (i === 0) dp[i] = nums[i]
//         else dp[i] = Math.max(dp[i - 1] * nums[i], nums[i])
//         res = Math.max(res, dp[i])
//     }
//     return res
// }
// 此题还可以考虑前缀积的方式
function maxProduct(nums) {
    let max = [], min = [], res = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) max[i] = min[i] = nums[i]
        else {
            max[i] = Math.max(max[i - 1] * nums[i], min[i - 1] * nums[i], nums[i])
            min[i] = Math.min(max[i - 1] * nums[i], min[i - 1] * nums[i], nums[i])
        }
        res = Math.max(res, max[i])
    }
    return res
}

console.log(maxProduct([-2, 3, -4]))