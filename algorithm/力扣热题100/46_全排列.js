/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {

    const res = []
    const onPath = []
    const path = []
    function bt() {
        if (path.length === nums.length) {
            res.push([...path])
            return
        }

        for (let k = 0; k < nums.length; k++) {
            if (onPath[k]) continue;
            path.push(nums[k])
            onPath[k] = true
            bt()
            path.pop()
            onPath[k] = false
        }
    }
    bt()
    return res
};