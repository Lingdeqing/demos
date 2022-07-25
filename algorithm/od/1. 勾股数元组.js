// 题目描述：
// 如果三个正整数A、B、C ,A²+B²=C²则为勾股数
// 如果ABC之间两两互质，即A与B，A与C，B与C均互质没有公约数，
// 则称其为勾股数元组。
// 请求出给定n~m范围内所有的勾股数元组

// 输入描述
// 起始范围
// 1 < n < 10000
// n < m < 10000

// 输出描述
// ABC保证A<B<C
// 输出格式A B C
// 多组勾股数元组，按照A B C升序的排序方式输出。
// 若给定范围内，找不到勾股数元组时，输出Na。

// 示例一
// 输入
// 1
// 20
// 输出
// 3 4 5
// 5 12 13
// 8 15 17

// 示例二
// 输入
// 5
// 10
// 输出
// Na

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
