// https://www.nowcoder.com/practice/fbc417f314f745b1978fc751a54ac8cb

// 回溯模版-排列/组合模版
// ❌ 不对，下面的写法 比如 a*b-c/d、a*(b-c/d)会错过
// 正确的思路应该是 
// 1. 先从4个数字中取出2个数+-*/运算
// 2. 再从3个数字中取出2个数+-*/运算
// 3. 最后2个数字进行+-*/运算
function win24(nums) {
    const used = new Set()
    const ops = [
        (a, b) => a + b,
        (a, b) => a - b,
        (a, b) => a * b,
        (a, b) => a / b
    ]
    function dfs(sum) {
        if (used.size === nums.length) {
            return sum === 24
        }
        for (let index in nums) {
            const num = nums[index]
            if (used.has(index)) continue;
            for (let op of ops) {
                used.add(index)
                if (dfs(op(sum, num))) {
                    return true
                }
                used.delete(index)
            }
        }
        return false
    }
    return dfs(0)
}

// 参考：https://www.jianshu.com/p/1b4377fb6e69
// 1. 先从4个数字中取出2个数+-*/运算
// 2. 再从3个数字中取出2个数+-*/运算
// 3. 最后2个数字进行+-*/运算
function win24(nums) {
    const ops = [
        (a, b) => a + b,
        (a, b) => a - b,
        (a, b) => a * b,
        (a, b) => a / b,

        (a, b) => b - a, // 别忘了这俩
        (a, b) => b / a,
    ]
    function dfs(chooseList) {
        if (chooseList.length === 1) {
            return chooseList[0] === 24
        }
        // 取出俩数字
        for (let i = 0; i < chooseList.length; i++) {
            for (let j = i + 1; j < chooseList.length; j++) {
                for (let op of ops) {
                    // 6种运算
                    const result = op(chooseList[i], chooseList[j])
                    // 构造剩下的数字列表
                    const newList = [result, ...chooseList.filter((item, index) => index !== i && index !== j)]
                    // 递归
                    if (dfs(newList)) {
                        return true
                    }
                }
            }
        }
        return false
    }
    return dfs(nums)
}

console.log(win24([1,4,5,6]))