// https://www.nowcoder.com/practice/1221ec77125d4370833fd3ad5ba72395

// 兔子从出生后的第3个月起每个月生1只兔子
function rabbit(n) {
    // return 2 ** Math.floor((n - 1) / 2) error

    // const dp = [1, 1]; // dp[i]表示第i个月的兔子总数
    // for (let i = 2; i < n; i++) {
    //     dp[i] = dp[i - 1] + dp[i - 2]
    // }
    // return dp[n - 1]

    let a = 1, b = 1; // dp[i]表示第i个月的兔子总数
    for (let i = 2; i < n; i++) {
        [a, b] = [b, a + b]
    }
    return b
}