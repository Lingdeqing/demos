// 46. 全排列

function permute(nums) {
    const used = new Set(), res = []
    function backtrack(path) {
        if (path.length === nums.length) {
            res.push([...path])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (used.has(i)) continue;
            used.add(i)
            path.push(nums[i])
            backtrack(path)
            used.delete(i)
            path.pop()
        }
    }
    backtrack([])
    return res
}
