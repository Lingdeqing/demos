function reverse(x) {
    let res = 0
    let MIN = -(2 ** 31) //-2147483648
    let MAX = (2 ** 31) - 1 // 2147483647
    while (x) {
        const digit = (x % 10)
        if (res < MIN / 10
            || (res === ~~(MIN / 10) && digit < -8)
            || res > MAX / 10
            || (res === ~~(MAX / 10) && digit > 7)) return 0 // 此时x还有值，溢出了
        res = res * 10 + digit
        x = ~~(x / 10)
    }
    return res
};
console.log(reverse(-123))