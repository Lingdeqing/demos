// 剑指 Offer 61. 扑克牌中的顺子
// https://leetcode.cn/problems/bu-ke-pai-zhong-de-shun-zi-lcof/

// function isStraight(nums) {
//     nums.sort((a, b) => a - b)
//     let king = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 0) {
//             king++;
//         } else {
//             if (i + 1 < nums.length) {
//                 if (nums[i + 1] - nums[i] - 1 > 0) {
//                     king -= nums[i + 1] - nums[i] - 1
//                 } else if (nums[i + 1] - nums[i] - 1 === 0) {
//                     return false
//                 }
//             }
//         }
//         if (king < 0) {
//             return false
//         }
//     }
//     return true
// }


function isStraight(nums) {
    let set = new Set(), max = 0, min = 100
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) continue;
        if (set.has(nums[i])) return false;
        set.add(nums[i]);
        max = Math.max(max, nums[i])
        min = Math.min(min, nums[i])
    }
    return max - min < 5
}