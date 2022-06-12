// 快速幂
function quickPow(x, n) {
    if (n === 0) return 1
    const y = quickPow(x, Math.floor(n / 2))
    return n % 2 === 0 ? y * y : y * y * x
}
function pow(x, n) {
    return n >= 0 ? quickPow(x, n) : 1 / quickPow(x, -n)
}
// 迭代法：https://leetcode.cn/problems/powx-n/solution/powx-n-by-leetcode-solution/
function pow2(x, n) {
    let isNeg = n < 0;
    if (n < 0) {
        n = -n;
    }
    let res = 1
    while (n) {
        if (n % 2 === 1) {
            res *= x;
        }
        x *= x
        n = Math.floor(n / 2)
    }
    return isNeg ? 1 / res : res
}


// 快速乘
function quickMul(a, b) {
    if (b === 0) return 0
    const y = quickMul(a, Math.floor(b / 2))
    return b % 2 === 0 ? y + y : y + y + a
}
// 迭代法
function quickMul(a, n) {
    let res = 0
    while (n) {
        if (n % 2 === 1) res += a;
        a += a;
        n = Math.floor(n / 2)
    }
    return res
}
function mul(a, b) {
    if (a < 0 && b < 0) return quickMul(-a, -b)
    if (a < 0) return -quickMul(-a, b)
    if (b < 0) return -quickMul(a, -b)
    return a >= b ? quickMul(a, b) : quickMul(b, a)
}