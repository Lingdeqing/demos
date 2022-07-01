// 1. 两数之和
// https://leetcode.cn/problems/two-sum/

function twoSum(nums, target) {
    let map = new Map(), num = 0
    for (let i = 0; i < nums.length; i++) {
        num = nums[i]
        if (map.has(target - num)) {
            return [map.get(target - num), i]
        }
        map.set(num, i)
    }
    return []
}