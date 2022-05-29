// https://www.nowcoder.com/practice/7299c12e6abb437c87ad3e712383ff84

// https://blog.csdn.net/qq_41807327/article/details/102983896
function perfectNum(n) {
    let res = 0;
    for (let i = 2; i <= n; i++) {
        if (isPerfect(i)) {
            res++
        }
    }
    return res
}
function isPerfect(n) {
    const k = Math.floor(n / 2)
    let sum = 0, m = n
    for (let i = 1; i <= k; i++) {
        if (n % i === 0) {
            sum += i
        }
    }
    return sum === m
}
// 优化
function isPerfect(n) {
    const k = Math.sqrt(n)
    let sum = 1, m = n
    for (let i = 2; i <= k; i++) {
        if (n % i === 0) {
            const res = n / i;
            if (res === i) {
                sum += res
            } else {
                sum += (i + res)
            }
        }
    }
    return sum === m
}
console.log(perfectNum(1000))