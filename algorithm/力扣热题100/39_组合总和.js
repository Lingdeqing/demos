/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const res = []
    function bt(start, path, sum) {
        if (sum < 0) return
        if (sum === 0) {
            res.push([...path])
            return
        }
        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i])
            bt(i, path, sum - candidates[i])
            path.pop()
        }
    }
    bt(0, [], target)
    return res
};