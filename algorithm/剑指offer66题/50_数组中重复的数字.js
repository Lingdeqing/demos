/**
    题目：
    在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。也不知道每个数字重复几次。请找出数组中任意一个重复的数字。 例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。
 */

// time: O(n)
// space: O(1)
// 利用好数字都在0到n-1
function findRepeatNumber(nums) {
    for (let i = 0; i < nums.length;) {
        if (nums[i] === i) {
            i++
        } else if (nums[i] === nums[nums[i]]) {
            return nums[i]
        } else {
            ;[nums[nums[i]], nums[i]] = [nums[i], nums[nums[i]]];
        }
    }
    return -1;
}

// time: O(n)
// space: O(n)
// set
function findRepeatNumber(nums) {
    const set = new Set();
    for (let num of nums) {
        if (set.has(num)) return num;
        set.add(num)
    }
    return -1;
}