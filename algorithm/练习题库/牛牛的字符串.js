// 牛牛的字符串
// https://www.nowcoder.com/practice/0cc3b103e43f4ec093be586df292822e?tpId=196&&tqId=37616&rp=1&ru=/ta/job-code-total&qru=/ta/job-code-total/question-ranking


function turn(s, k) {
    // write code here
    let n = s.length;
    let count = Array.from({ length: n }, () => new Array(26).fill(0))
    let res = 0
    for (let i = 0; i < n; i++) {
        const code = s.charCodeAt(i) - 'a'.charCodeAt(0);
        for (let j = 0; j < code; j++) {
            res += count[i % k][j]
        }
        count[i % k][code]++
    }
    return res
}
console.log(turn("cbexa", 2))