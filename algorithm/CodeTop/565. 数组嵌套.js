// 565. 数组嵌套
// https://leetcode.cn/problems/array-nesting/

// 太乱了
function arrayNesting(nums) {
    let res = 0, ai = 0, s = null, memo = new Map(), size = 0
    for (let i = 0; i < nums.length; i++) {
        ai = nums[i];
        s = new Set();
        while (!s.has(ai)) {
            if (memo.has(ai)) break;
            s.add(ai)
            ai = nums[ai]
        }
        size = memo.get(ai) || 0
        for (let num of s.keys()) {
            memo.set(num, size + s.size)
        }
        res = Math.max(res, memo.get(nums[i]))
    }
    return res
}


// https://leetcode.cn/problems/array-nesting/solution/by-ac_oier-n5hd/
//nums中的数包含若干个"环"(环形链表),每个元素属于特定的环且环的长度确定
//遍历nums,对每一个元素进行dfs操作,记录已访问过的元素,可以在O(n)的时间内解决问题
function arrayNesting2(nums) {
    let ans = 0, visited = {}, len = 0
    for (let i in nums) {
        if (visited[i]) continue;
        len = 0
        while (!visited[i]) {
            visited[i] = true
            i = nums[i]
            len++
        }
        ans = Math.max(ans, len)
    }
    return ans
}

// 空间复杂度O(1)
function arrayNesting3(nums) {
    let ans = 0, len = 0, t = 0
    for (let i in nums) {
        if (nums[i] === -1) continue;
        len = 0
        while (nums[i] !== -1) {
            t = nums[i]
            nums[i] = -1
            i = t
            len++
        }
        ans = Math.max(ans, len)
    }
    return ans
}

console.log(arrayNesting2([5, 4, 0, 3, 1, 6, 2]))