// 20. 有效的括号
// https://leetcode.cn/problems/valid-parentheses/
function isValid(s) {
    const stack = []
    const leftOf = {
        ')': '(',
        ']': '[',
        '}': '{',
    }
    for (let ch of s) {
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch)
        } else if (stack.length === 0 || leftOf[ch] !== stack.pop()) {
            return false
        }
    }
    return stack.length === 0
}