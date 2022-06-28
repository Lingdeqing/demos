// 47. 全排列 II
// https://leetcode.cn/problems/permutations-ii/

function permuteUnique(nums) {
    nums.sort((a, b) => a - b)
    let res = [], used = {}
    function backtrack(path) {
        if (path.length === nums.length) {
            res.push([...path])
            return
        }
        let prevNum = 100; // -10 <= nums[i] <= 10
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            // 当出现重复元素时，比如输入 nums = [1,2,2',2'']，2' 只有在 2 已经被使用的情况下才会被选择，同理，2'' 只有在 2' 已经被使用的情况下才会被选择，这就保证了相同元素在排列中的相对位置保证固定。
            // 这种思路也叫树层去重，同样的元素没有被用过说明是不同层，同层元素不能相等
            // if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue

            if (nums[i] === prevNum) continue;
            prevNum = nums[i];

            path.push(nums[i])
            used[i] = true
            backtrack(path)
            path.pop()
            used[i] = false
        }
    }
    backtrack([])
    return res
}
console.log(permuteUnique([1, 1, 2]))