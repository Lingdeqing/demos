// 32. 最长有效括号

// 得结合动态规划来做
function longestValidParentheses(s) {
    const stack = []
    const dp = new Array(s.length + 1).fill(0) // dp[i]表示以s[i-1]结尾的字符串的最长合法括号串长度
    for (let i = 0; i < s.length; i++) {
        const ch = s[i]
        if (ch === '(') {
            stack.push(i)
            dp[i + 1] = 0 // 左括号结尾，不合法
        } else {
            if (stack.length > 0) {
                const leftIndex = stack.pop()
                dp[i + 1] = i - leftIndex + 1 + dp[leftIndex]
            } else {
                dp[i + 1] = 0
            }
        }
    }
    return Math.max(...dp)
}