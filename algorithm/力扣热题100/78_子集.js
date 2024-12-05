/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const res = []
    const set = []
    function bt(start) {
        res.push([...set])
        for (let i = start; i < nums.length; i++) {
            set.push(nums[i])
            bt(i + 1)
            set.pop()
        }
    }
    bt(0)
    return res
};