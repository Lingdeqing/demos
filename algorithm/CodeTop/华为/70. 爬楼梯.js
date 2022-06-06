// 70. 爬楼梯
// https://leetcode.cn/problems/climbing-stairs/

function climbStairs(n) {
    let memo = {}
    function dp(n) {
        if (n <= 1) return 1
        if (memo[n]) return memo[n]
        memo[n] = dp(n - 1) + dp(n - 2)
        return memo[n]
    }
    return dp(n)
}