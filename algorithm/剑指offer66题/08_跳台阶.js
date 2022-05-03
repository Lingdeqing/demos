/**
    题目：
        一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
 */
const memo = {}
function step(n) {
    if (n === 1) return 1
    if (n === 2) return 2
    if (memo[n]) return memo[n]
    memo[n] = step(n - 1) + step(n - 2)
    return memo[n]
}