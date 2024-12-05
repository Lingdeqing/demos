/**
 * @param {number} n
 * @return {number}
 */
const memo = {}
var climbStairs = function (n) {
    if (n <= 1) return 1
    if (memo[n]) return memo[n]
    memo[n] = climbStairs(n - 1) + climbStairs(n - 2)
    return memo[n]
};