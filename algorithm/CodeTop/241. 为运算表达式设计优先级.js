// 241. 为运算表达式设计优先级
// https://leetcode.cn/problems/different-ways-to-add-parentheses/

function diffWaysToCompute(expression) {
    let memo = {}
    function dfs(expression) {
        if (memo[expression]) return memo[expression]
        let res = [], leftRes = null, rightRes = null
        for (let i = 0; i < expression.length; i++) {
            if (expression[i] === '+' || expression[i] === '-' || expression[i] === '*') {
                leftRes = dfs(expression.slice(0, i))
                rightRes = dfs(expression.slice(i + 1))

                for (let a of leftRes) {
                    for (let b of rightRes) {
                        if (expression[i] === '+') res.push(a + b)
                        if (expression[i] === '-') res.push(a - b)
                        if (expression[i] === '*') res.push(a * b)
                    }
                }
            }
        }
        if (res.length === 0) {
            res = [+expression]
        }
        return memo[expression] = res
    }
    return dfs(expression)
}
