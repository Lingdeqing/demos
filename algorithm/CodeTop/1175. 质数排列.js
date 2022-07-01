// 1175. 质数排列
// https://leetcode.cn/problems/prime-arrangements/

function numPrimeArrangements(n) {
    let a = 0, // 质数个数
        b = 0, // 合数个数
        res = 1,
        m = 1e9 + 7
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            a++
        }
    }
    b = n - a

    // a!xb!
    while (a > 0) res = (res * a--) % m;
    while (b > 0) res = (res * b--) % m;

    return res
}

function isPrime(n) {
    if (n === 1) return false // 注意1不是质数，因为1不是用乘法构成数字的基本构件，比如6可以由质数2和3组成
    let k = Math.sqrt(n)
    for (let i = 2; i <= k; i++) {
        if (n % i === 0) return false
    }
    return true
}