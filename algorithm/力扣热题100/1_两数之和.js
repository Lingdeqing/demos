// https://leetcode.cn/problems/two-sum/
function twoSum(nums, target) {
    const map = new Map()
    for (let i = 0, num; i < nums.length; i++) {
        num = nums[i];
        if (map.has(target - num)) {
            return [map.get(target - num), i]
        }
        map.set(num, i)
    }
    return []
}