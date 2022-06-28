// 剑指 Offer 10- II. 青蛙跳台阶问题
// https://leetcode.cn/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/

// JS 的整型范围：https://segmentfault.com/a/1190000002608050
// 为什么要取模1000000007：https://leetcode.cn/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/comments/292452
function numWays(n) {
    // let memo = {}
    // function dp(n) {
    //     if (n <= 1) return 1;
    //     if (memo[n]) return memo[n]
    //     memo[n] = dp(n - 1) + dp(n - 2)
    //     return memo[n]
    // }
    // return dp(n) % 1000000007
    const dp = [1, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
    }
    return dp[n]
}
console.log(numWays(78))
