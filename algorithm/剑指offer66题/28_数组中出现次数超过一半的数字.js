/**
    题目：
        数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
 */

// time: O(n)
// space: O(1)
// 摩尔投票法(同归于尽法)
function majorityElement(nums) {
    let votes = 0, x = 0
    for (let i = 0; i < nums.length; i++) {
        if (votes === 0) {
            x = nums[i]
        }
        if (x === nums[i]) {
            votes++
        } else {
            votes--
        }
    }
    return x
}

// time: O(n)
// space: O(n)
// 哈希统计
function majorityElement(nums) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }
    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i]) > nums.length / 2) {
            return nums[i]
        }
    }
    return 0
}