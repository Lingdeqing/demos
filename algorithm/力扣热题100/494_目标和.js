/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var findTargetSumWays = function (nums, target) {
    const memo = new Map()
    // 表示从i到结尾凑出target的表达式数量
    function dp(i, target) {
        if (i >= nums.length) {
            if (target === 0) {
                return 1
            }
            return 0
        }

        const key = i + ',' + target
        if (memo.has(key)) return memo.get(key)

        const res = dp(i + 1, target - nums[i]) + dp(i + 1, target + nums[i])

        memo.set(key, res)
        return res
    }
    return dp(0, target)
}