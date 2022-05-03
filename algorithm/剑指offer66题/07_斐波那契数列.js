/**
    题目：
        大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项。
 */

function fib(n) {
    let a = 0, b = 1
    for (let i = 1; i <= n; i++) {
        // const temp = a;
        // a = b;
        // b = temp + b;
        [a, b] = [b, a + b]
    }
    return a
}


function fib(n) {
    if (n <= 2) return 1
    return fib(n - 1) + fib(n - 2)
}
const cache = {}
function fib(n) {
    if (cache[n]) return cache[n]
    if (n <= 2) return 1
    cache[n] = fib(n - 1) + fib(n - 2)
    return cache[n]
}
