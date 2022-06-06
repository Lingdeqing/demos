// 32. 最长有效括号
// https://leetcode.cn/problems/longest-valid-parentheses/

// 栈+dp
function longestValidParentheses(s) {
    const dp = new Array(s.length + 1).fill(0)// dp[i]表示s[0..i-1]以i结尾的有效括号的长度
    const stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            dp[i + 1] = 0
            stack.push(i)
        } else {
            if (stack.length === 0) {
                dp[i + 1] = 0
            } else {
                const leftIndex = stack.pop()
                dp[i + 1] = dp[leftIndex] + i - leftIndex + 1
            }
        }
    }
    return Math.max(...dp)
}