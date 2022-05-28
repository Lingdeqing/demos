// https://www.nowcoder.com/practice/3ab09737afb645cc82c35d56a5ce802a


function round(n) {
    // return Math.round(n)
    // return n * 10 % 10 >= 5 ? Math.floor(n * 10 / 10) + 1 : Math.floor(n * 10 / 10)
    return ~~(n + 0.5)
}