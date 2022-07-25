// 题目描述：
// 一天一只顽猴想要从山脚爬到山顶
// 途中经过一个有n个台阶的阶梯，但是这个猴子有个习惯，每一次只跳1步或3步
// 试问？猴子通过这个阶梯有多少种不同的跳跃方式

// 输入描述
// 输入只有一个这个数n 0 < n < 50
// 此阶梯有多个台阶

// 输出描述
// 有多少种跳跃方式

// 示例一
// 输入
// 50
// 输出
// 122106097

// 示例二
// 输入
// 3
// 输出
// 2


function solution(n) {
    const memo = {}
    function dp(n) {
        if (memo[n]) return memo[n]
        if (n <= 2) return 1
        memo[n] = dp(n - 1) + dp(n - 3)
        return memo[n]
    }
    return dp(n)
}

console.log(solution(50))