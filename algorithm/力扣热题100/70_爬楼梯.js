
var climbStairs = function (n) {
    const memo = {}
    // n阶有多少种方法
    function dp(n) {
        if (n <= 1) return 1
        return memo[n] || (memo[n] = dp(n - 1) + dp(n - 2))
    }
    return dp(n)
}