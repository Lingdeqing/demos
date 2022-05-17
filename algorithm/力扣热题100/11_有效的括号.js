// 20. 有效的括号

function isValid(s) {
    const stack = []
    for (let ch of s) {
        if (ch === '(' || ch === '[' || ch === '{') {
            stack.push(ch)
        } else {
            if (stack.length === 0) return false
            const top = stack.pop()
            if (leftOf(ch) !== top) {
                return false
            }
        }
    }
    return stack.length === 0
}
function leftOf(ch) {
    return {
        ')': '(',
        ']': '[',
        '}': '{',
    }[ch]
}