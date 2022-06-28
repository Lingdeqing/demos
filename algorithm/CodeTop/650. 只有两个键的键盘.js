// 650. 只有两个键的键盘
// https://leetcode.cn/problems/2-keys-keyboard/

// 分析发现就是就所有约数之和
function minSteps(n) {
    let k = Math.sqrt(n), res = 0
    for (let i = 2; i <= k; i++) {
        while (n % i === 0) {
            n /= i;
            res += i
        }
    }
    if (n > 1) {
        res += n
    }
    return res
}
const res = []
for (let i = 1; i <= 1000; i++) {
    res[i] = minSteps(i)
}
console.log(res)
// function minSteps(n) {
//     const memo = {}
//     function recur(n) {
//         if (n === 1) return 0
//         if (memo[n]) return memo[n]
//         const max = maxDivide(n) // 最大约数
//         if (max === 1) { // 质数
//             memo[n] = n
//         } else {
//             memo[n] = n / max + recur(max)
//         }
//         return memo[n]
//     }
//     return recur(n)
// }

// function maxDivide(n) {
//     let k = Math.sqrt(n), res = 1
//     for (let i = 2; i <= k; i++) {
//         if (n % i === 0) {
//             res = Math.max(res, n / i)
//         }
//     }
//     return res
// }