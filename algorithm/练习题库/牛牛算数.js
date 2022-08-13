// 牛牛算数
// https://www.nowcoder.com/practice/1732b7aad48c47cf89867a9f37bf80b6?tpId=196&&tqId=37263&rp=1&ru=/ta/job-code-total&qru=/ta/job-code-total/question-ranking

// a1,a2,a3,a4,a5
// (c*a1+c*a2), (c*a3+c*a4), a5
// 每次取小数优先计算
// 简单证明 比如 a1<a2<a3
// c*a1+c*a2, a3 => c*a1+c*a2 + c*(a1+a2)+c*a3 = c*a1+c*a2 + c*(a1+a2+a3)
// c*a1+c*a3, a2 => c*a1+c*a3 + c*(a1+a3)+c*a2 = c*a1+c*a3 + c*(a1+a2+a3)
// c*a2+c*a3, a1 => c*a2+c*a3 + c*(a2+a3)+c*a1 = c*a3+c*a3 + c*(a1+a2+a3)
const PriorityQueue = require('../lib/PriorityQueue')
function solve(n, c, a) {
    const pq = new PriorityQueue((a, b) => a <= b)
    for (let i = 0; i < a.length; i++) {
        pq.add(a[i])
    }
    let res = 0
    while (pq.size() > 1) {
        const a = pq.poll(), b = pq.poll()
        res += c * a + c * b
        pq.add(a + b)
    }
    return res
}
console.log(solve(5, 76, [81, 30, 76, 24, 84]))