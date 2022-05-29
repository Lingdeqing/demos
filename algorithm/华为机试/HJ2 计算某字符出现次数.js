// https://www.nowcoder.com/practice/a35ce98431874e3a820dbe4b2d0508b1

function count(str, ch) {
    let res = 0
    for (let c of str) {
        if (c === ch || c.toLowerCase() === ch.toLowerCase()) {
            res++
        }
    }
    return res
}