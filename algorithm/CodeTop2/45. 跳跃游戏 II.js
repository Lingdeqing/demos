// 45. 跳跃游戏 II
// https://leetcode.cn/problems/jump-game-ii/

// 贪心真的难写，用dp吧
// function jump(nums) {
//     if (nums.length <= 1) return 0
//     let res = 0
//     for (let i = 0; i < nums.length;) {
//         if (i >= nums.length - 1) return res
//         let max = i
//         for (let j = i + 1; j <= i + nums[i]; j++) {
//             if (nums[j] + j > nums[max] + max) {
//                 max = j
//             }
//         }
//         i = max;
//         res++;
//     }
//     return res
// }


function jump(nums) {
    let dp = new Array(nums.length).fill(Infinity) // dp[i]跳到第i个最少步数
    dp[0] = 0
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (j + nums[j] >= i) {
                dp[i] = Math.min(dp[i], dp[j] + 1)
            }
        }
    }
    return dp[nums.length - 1]
}

// 贪一手，好难写的贪心啊
function jump(nums) {
    let maxPos = 0, lastMaxPos = 0, res = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        maxPos = Math.max(maxPos, nums[i] + i)
        if (lastMaxPos === i) {
            lastMaxPos = maxPos
            res++;
        }
    }
    return res
}
console.log(jump([2, 3, 1, 1, 4]))