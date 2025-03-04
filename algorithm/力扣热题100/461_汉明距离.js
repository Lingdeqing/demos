/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    // return (x ^ y).toString(2).replace(/0/g, '').length
    let s = x ^ y
    let res = 0;
    while (s) {
        res += s & 1;
        s >>= 1;
    }

    return res
};

function hammingDistance(x, y) {
    x ^= y
    y = 0
    while (x) {
        x &= x - 1
        y++
    }
    return y
}