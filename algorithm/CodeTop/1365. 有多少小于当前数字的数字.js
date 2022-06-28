// 1365. 有多少小于当前数字的数字
// https://leetcode.cn/problems/how-many-numbers-are-smaller-than-the-current-number/

function smallerNumbersThanCurrent(nums) {
    nums = nums.map((num, i) => [num, i])
    nums.sort((a, b) => a[0] - b[0])

    let res = []
    for (let i = 0, j = 0; i < nums.length; i++) {
        if (i > 0 && nums[i][0] !== nums[i - 1][0]) {
            j = i;
        }
        res[nums[i][1]] = j
    }
    return res
}

// 计数排序
// 适用于：数据量大、数据范围不大
function smallerNumbersThanCurrent2(nums) {
    // 计数
    const freq = new Array(101).fill(0)
    for (let num of nums) {
        freq[num]++
    }

    // 构建前缀和
    for (let i = 1; i < freq.length; i++) {
        freq[i] += freq[i - 1]
    }

    // 构建结果
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) res[i] = freq[nums[i] - 1]
        else res[i] = 0
    }
    return res
}
console.log(smallerNumbersThanCurrent([2, 3, 3, 3, 5, 6, 6, 7, 8, 8]))