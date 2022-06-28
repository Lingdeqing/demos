// 46. 全排列
// https://leetcode.cn/problems/permutations/

// 排列组合题解：https://labuladong.github.io/algo/4/29/105/
function permute(nums) {
    let res = [], used = {}
    function backtrack(path) {
        if (path.length === nums.length) {
            res.push([...path])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue
            used[i] = true
            path.push(nums[i])
            backtrack(path)
            used[i] = false
            path.pop()
        }
    }
    backtrack([])
    return res
}
