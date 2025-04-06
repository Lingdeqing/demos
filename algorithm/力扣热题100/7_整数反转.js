function reverse(x) {
    let res = 0, MIN = -(2 ** 31), MAX = (2 ** 31) - 1
    while (x) {
        if (res < MIN / 10 || res > MAX / 10) return 0
        res = res * 10 + (x % 10)
        x = ~~(x / 10)
    }
    return res
};
console.log(reverse(-123))