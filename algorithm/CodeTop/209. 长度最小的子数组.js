// 209. 长度最小的子数组
// https://leetcode.cn/problems/minimum-size-subarray-sum/

function minSubArrayLen(target, nums) {
    let res = Infinity, i = 0, j = 0, sum = 0
    while (j < nums.length) {
        sum += nums[j]
        j++

        while (i < j && sum >= target) {
            res = Math.min(res, j - i)
            sum -= nums[i]
            i++
        }
    }
    return isFinite(res) ? res : 0
}
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]))