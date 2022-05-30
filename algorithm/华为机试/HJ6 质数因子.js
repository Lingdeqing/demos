// https://www.nowcoder.com/practice/196534628ca6490ebce2e336b47b3607

//分解质因子
function primes(n) {
    let res = []
    const sqrt = Math.sqrt(n)
    for (let i = 2; i <= sqrt; i++) {
        while (n % i === 0) {
            res.push(i)
            n = n / i
        }
    }
    if (n !== 1) res.push(n)
    return res
}
function isPrime(n) {
    const sqrt = Math.sqrt(n)
    for (let i = 2; i <= sqrt; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

console.log(primes(180))