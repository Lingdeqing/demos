/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b)
    return nSum(nums, 3, 0, target)
};
function nSum(nums, n, start, target) {
    let res = Infinity
    if (n === 2) {
        let i = start, j = nums.length - 1, minDelta = Infinity
        while (i < j) {
            let left = nums[i], right = nums[j], sum = left + right
            let delta = Math.abs(sum - target)
            if (delta < minDelta) {
                minDelta = delta
                res = left + right
            }
            if (sum < target) {
                i++
            } else {
                j--
            }
        }
    } else {
        let minDelta = Infinity
        for (let i = start; i < nums.length; i++) {
            const item = nums[i]
            const subRes = nSum(nums, n - 1, i + 1, target - item)
            let delta = Math.abs(item + subRes - target)
            if (delta < minDelta) {
                minDelta = delta
                res = item + subRes
            }
            while (i + 1 < nums.length && nums[i + 1] === item) i++
        }
    }
    return res
}
console.log(threeSumClosest([-1, 2, 1, -4], 1))