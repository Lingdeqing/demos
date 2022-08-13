// 找出重复的数
// https://www.nowcoder.com/practice/6973953f1ddb43f897ca23ec60389e87?tpId=196&&tqId=37607&rp=1&ru=/ta/job-code-total&qru=/ta/job-code-total/question-ranking


// x = 1^2^3....^n
// y = 1^2^3....^n^m = x^m
// x^y = x^x^m = 0^m= m
function search(n, a) {
    let y = 0, x = 0
    a.forEach(n => y ^= n)
    for (let i = 1; i <= n; i++) {
        x ^= i
    }
    return x ^ y
}

console.log(WordsMerge(["aab", "bac", "ccd"]))