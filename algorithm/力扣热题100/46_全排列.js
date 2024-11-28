/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {

    const res = []
    const used = []
    const path = []
    function bt() {
        if (path.length === nums.length) {
            res.push([...path])
            return
        }

        for (let k = 0; k < nums.length; k++) {
            if (used[k]) continue;
            path.push(nums[k])
            used[k] = true
            bt()
            path.pop()
            used[k] = false
        }
    }
    bt()
    return res
};