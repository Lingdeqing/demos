// 39. 组合总和

function combinationSum(candidates, target) {
    const res = []
    function backtrack(path, start, sum) {
        if (sum >= target) {
            if (target === sum) {
                res.push([...path])
            }
            return
        }
        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i])
            backtrack(path, i, sum + candidates[i])
            path.pop(candidates[i])
        }
    }
    backtrack([], 0, 0)
    return res
}
