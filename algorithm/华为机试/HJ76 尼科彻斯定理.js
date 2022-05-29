// https://www.nowcoder.com/practice/dbace3a5b3c4480e86ee3277f3fe1e85

// 考虑用等差数列求和公式推导做，看了题解感觉自己是个傻子😄
// 题解：https://blog.nowcoder.net/n/2c5bdb8c37cc4bc4ba26c515c77bc386?f=comment
function nikechesi(m) {
    const sum = m * m * m
    for (let i = 1; i <= sum - m + 1; i += 2) {
        let s = 0, res = []
        for (let j = 0; j < m; j++) {
            s += (2 * j + i);
            res.push(2 * j + i)
        }
        if (s === sum) {
            return res.join('+')
        }
    }
    return ''
}

console.log(nikechesi(6))