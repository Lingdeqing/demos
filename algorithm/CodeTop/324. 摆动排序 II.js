// 324. 摆动排序 II
// https://leetcode.cn/problems/wiggle-sort-ii/

function wiggleSort(nums) {
    nums.sort((a, b) => a - b)
    let res = []
    let a = Math.floor((nums.length + 1) / 2), b = nums.length - a
    for (let i = 0; i < b; i++) {
        res.push(nums[a - 1 - i])
        res.push(nums[a + b - 1 - i])
    }
    if (a !== b) res.push(nums[0])
    for (let i = 0; i < nums.length; i++) {
        nums[i] = res[i]
    }
    return nums
}

console.log(wiggleSort([1, 4, 3, 4, 1, 2, 1, 3, 1, 3, 2, 3, 3]))



