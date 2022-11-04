// 18. 四数之和
// https://leetcode.cn/problems/4sum/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b)
    return nthSum(4, nums, 0, target)
};

function nthSum(n, nums, start, target) {
    if (n === 2) {
        // const set = new Set(), res = []
        // for (let i = start; i < nums.length; i++) {
        //     if (set.has(target - nums[i])) {
        //         res.push([nums[i], target - nums[i]])
        //     }
        //     set.add(nums[i])
        // }
        // return res
        let i = start, j = nums.length - 1, res = []
        while (i < j) {
            const left = nums[i], right = nums[j], sum = left + right
            if (sum === target) {
                res.push([left, right])
                while (left === nums[i]) i++;
                while (right === nums[j]) j--;
            } else if (sum < target) {
                while (left === nums[i]) i++;
            } else if (sum > target) {
                while (right === nums[j]) j--;
            }
        }
        return res
    } else {
        let res = []
        for (let i = start; i < nums.length;) {
            const curNum = nums[i]
            const tuples = nthSum(n - 1, nums, i + 1, target - curNum)
            tuples.forEach(tuple => {
                res.push([curNum].concat(tuple))
            })
            while (i < nums.length && nums[i] === curNum) i++;
        }
        return res
    }
}

console.log(fourSum([2, 2, 2, 2, 2], 8))