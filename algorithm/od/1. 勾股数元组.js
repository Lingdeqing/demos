function solution(m, n) {
    let res = []
    for (let i = m; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            const k = Math.sqrt(i * i + j * j)
            if (k <= n && Math.floor(k) === k && gcd(i, j) === 1 && gcd(i, k) === 1 && gcd(j, k) === 1) {
                res.push([i, j, k])
            }
        }
    }
    return res
}
function gcd(a, b) {
    while (a !== b) {
        if (a < b) {
            [a, b] = [b, a];
        }
        a = a - b
    }
    return a
}


solution(2, 9999)
