// https://www.nowcoder.com/practice/e0480b2c6aa24bfba0935ffcca3ccb7b

// 参考证明：https://www.jianshu.com/p/da04c77e11d0
// 埃及分数，贪心算法
function egyptFraction(a, b) {
    let res = []
    do {
        const gcd = getGcd(a, b)
        a /= gcd;
        b /= gcd;
        const c = Math.floor(b / a)
        res.push(c + 1)
        a = a * c + a - b;
        b = b * (c + 1)
    } while (a > 1)
    res.push(b)
    return res;
}

function getGcd(a, b) {
    while (a !== b) {
        if (a < b) {
            ;[a, b] = [b, a];
        }
        a = a - b;
    }
    return a
}
