/**
    题目：
        一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
 */
const memo = {}
function step(n) {
    if (n === 0) return 1
    if (n === 1) return 1
    if (n === 2) return 2
    if (memo[n]) return memo[n]
    // 剩余k级阶梯
    // 第一次可以跳1阶，2阶，...，n阶
    // f(n) = f(n-1)+f(n-2)+...+f(n-n)
    memo[n] = 0
    for (let k = 1; k <= n; k++) {
        memo[n] += step(n - k)
    }
    return memo[n]
}