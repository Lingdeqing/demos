/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const res = []
    const path = []
    function bt(start) {
        res.push([...path])
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i])
            bt(i + 1)
            path.pop()
        }
    }
    bt(0)
    return res
};