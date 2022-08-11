// NC150 二叉树的个数
// https://www.nowcoder.com/practice/78bdfba0a5c1488a9aa8ca067ce508bd?tpId=196&&tqId=37565&rp=1&ru=/ta/job-code-total&qru=/ta/job-code-total/question-ranking

// 递归不知道为啥超时草
function numberOfTree(n) {
    let memo = {}
    function dp(n) {
        if (memo[n]) return memo[n]
        if (n === 0) return 1n
        if (n === 1) return 1n
        let res = 0n, m = 1000000007n
        for (let i = 0; i <= n - 1; i++) {
            res += dp(i) * dp(n - 1 - i)
            res = res % m
        }
        memo[n] = res
        return res
    }
    return dp(n)
}

// 自底向上可以通过
function numberOfTree2(n) {
    let dp = new Array(n + 1).fill(0), m = 1000000007n
    dp[0] = 1n
    dp[1] = 1n
    for (let num = 2; num <= n; num++) {
        dp[num] = 0n
        for (let i = 0; i <= num - 1; i++) {
            dp[num] += dp[i] * dp[num - 1 - i]
            dp[num] = dp[num] % m
        }
    }
    return parseInt(dp[n])
}
console.log(numberOfTree2(23))