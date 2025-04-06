/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let res = 0, symbol = 1, i = 0, MIN = -(2 ** 31),
        MAX = (2 ** 31) - 1

    while (i < s.length && s[i] === ' ') i++

    if (s[i] === '-') {
        symbol = -1;
        i++
    } else if (s[i] === '+') {
        i++
    }


    while (i < s.length) {
        const num = s.charCodeAt(i) - '0'.charCodeAt(0)
        if (num > 9 || num < 0) break
        if (symbol * res < ~~(MIN / 10) || (symbol * res === ~~(MIN / 10) && num >= 8)) {
            return MIN // -2147483648
        } else if (symbol * res > ~~(MAX / 10) || (symbol * res === ~~(MAX / 10) && num >= 7)) {
            return MAX //  2147483647
        }
        res = res * 10 + num
        i++
    }

    return symbol * res
};
console.log(myAtoi("2147483648"))