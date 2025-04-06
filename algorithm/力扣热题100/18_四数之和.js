/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b)
    return nSum(nums, 4, 0, target)
};
function nSum(nums, n, start, target) {
    let res = []
    if (n === 2) {
        let i = start, j = nums.length - 1
        while (i < j) {
            let left = nums[i], right = nums[j], sum = left + right
            if (sum === target) {
                res.push([left, right])
                while (i < j && nums[i] === left) i++
                while (i < j && nums[j] === right) j--
            } else if (sum < target) {
                i++
            } else {
                j--
            }
        }
    } else {
        for (let i = start; i < nums.length; i++) {
            const item = nums[i]
            const subRes = nSum(nums, n - 1, i + 1, target - item)
            res.push(...subRes.map((items) => [item, ...items]))
            while (i + 1 < nums.length && nums[i + 1] === item) i++
        }
    }
    return res
}