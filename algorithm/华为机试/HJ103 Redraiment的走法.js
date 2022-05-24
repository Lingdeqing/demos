// https://www.nowcoder.com/practice/119bcca3befb405fbe58abe9c532eb29

// 单调栈+动态规划 错啦～～，状态转移这边搞错了，因为后面的高个子会把大于前面矮个子的数字清除掉
// function mostStep(height) {
//     const dp = new Array(height.length); // dp[i]表示从i出发的最大步数
//     const stack = [] // 单调栈
//     for (let i = height.length - 1; i >= 0; i--) {
//         // 维护好单调栈，使得从栈顶到栈底始终是单调递增的
//         // 把栈里面比当前小的都清除掉
//         while (stack.length > 0 && height[stack[stack.length - 1]] <= height[i]) {
//             stack.pop()
//         }

//         if (stack.length > 0) {
//             const k = stack[stack.length - 1]
//             dp[i] = dp[k] + 1
//         } else { // 后面没有比当前节点大的元素
//             dp[i] = 1
//         }

//         stack.push(i)
//     }
//     return Math.max(...dp)
// }


// 动态规划 的正确写法
// 最长递增子序列问题
function mostStep2(nums) {
    const dp = [] // dp[i]表示以i开始的最长递增子序列的长度
    // dp[i] = max(dp[k1], dp[k2], ..., dp[kn]) + 1，nums[i]<nums[ki]
    for (let i = nums.length - 1; i >= 0; i--) {
        dp[i] = 1;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return Math.max(...dp)
}


// 递归 - 自顶向下 备忘录
function mostStep3(height) {
    let res = 0, memo = {}
    // 返回以start开头的最长递增子序列的长度
    function dfs(start) {
        if (memo[start]) return memo[start]
        if (start === height.length - 1) {
            return 1
        }
        let res = 1;
        for (let i = start + 1; i < height.length; i++) {
            if (height[i] > height[start]) {
                res = Math.max(res, 1 + dfs(i))
            }
        }
        memo[start] = res
        return res
    }

    for (let i = 0; i < height.length; i++) {
        res = Math.max(res, dfs(i))
    }
    return res
}

// 暴力穷举
function mostStep(height) {
    let res = 0
    function dfs(path, start) {
        for (let i = start; i < height.length; i++) {
            if (path.length > 0 && path[path.length - 1] >= height[i]) {
                continue
            }
            path.push(height[i])
            dfs(path, i + 1)
            res = Math.max(res, path.length)
            path.pop()
        }
    }
    dfs([], 0)
    return res
}

console.log(mostStep3('268 90 179 129 204 224'.split(' ').map(item => +item)))
