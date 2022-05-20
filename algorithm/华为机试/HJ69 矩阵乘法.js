// https://www.nowcoder.com/practice/ebe941260f8c4210aa8c17e99cbc663b

function mutiply(m1, m2, x, y, z) {
    const res = new Array(x)
    for (let i = 0; i < x; i++) {
        res[i] = new Array(z)
        for (let j = 0; j < z; j++) {
            res[i][j] = 0
            for (let k = 0; k < y; k++) {
                res[i][j] += m1[i][k] * m2[k][j]
            }
        }
    }
    return res
}