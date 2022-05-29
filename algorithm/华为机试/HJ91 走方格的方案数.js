// https://www.nowcoder.com/practice/e2a22f0305eb4f2f9846e7d644dba09b

const memo = {}
function move(m, n) {
    if (memo[m + ',' + n]) return memo[m + ',' + n]
    let res
    if (m === 1 && n === 1) res = 2;
    else if (m === 1) res = move(m, n - 1) + 1
    else if (n === 1) res = move(m - 1, n) + 1
    else res = move(m - 1, n) + move(m, n - 1)
    memo[m + ',' + n] = res;
    return res
}