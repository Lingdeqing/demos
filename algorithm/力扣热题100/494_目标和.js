/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {

    const memo = new Map()

    // dp表示从i到结尾的子数组拼出target的表达式数量
    function dp(nums, i, target) {
        if (i === nums.length) {
            if (target === 0) return 1
            return 0
        }
        if (memo.has(`${i},${target}`)) return memo.get(`${i},${target}`)
        const cur = dp(nums, i + 1, target + nums[i]) + dp(nums, i + 1, target - nums[i])
        memo.set(`${i},${target}`, cur)
        return cur
    }
    return dp(nums, 0, target)
};