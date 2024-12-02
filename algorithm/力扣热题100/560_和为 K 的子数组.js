/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        for (let j = 0; j < nums.length; j++) {
            sum += nums[j]
            if (sum === k) {
                res++
            }
        }
    }
    return res
};


// 前缀和解法

var subarraySum = function (nums, k) {
    let sum = 0;
    let res = 0;
    const map = new Map()
    map.set(0, 1)
    for (let n of nums) {
        sum += n
        if (map.has(sum - k)) {
            res += map.get(sum - k)
        }
        map.set(sum, (map.get(sum) || 0) + 1)
    }
}
