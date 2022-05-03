/**
    题目：
        给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
 */
// function pow(base, exponent) {
//     let result = 1
//     for (let i = 0; i < exponent; i++) {
//         result *= base
//     }
//     return result
// }

function pow(base, exponent) {
    if (exponent === 0) return 1
    if (exponent === 1) return base
    let isNegative = exponent < 0
    exponent = exponent < 0 ? -exponent : exponent
    let result = 1
    if (exponent % 2 === 0) {
        const half = pow(base, exponent / 2)
        result = half * half
    } else {
        const half = pow(base, (exponent - 1) / 2)
        result = half * half * base
    }
    return isNegative ? 1 / result : result
}

// pow(2.00000, -2147483648)位运算算出来不对，没想明白，还是老实用上面的除法算吧，竟然是Infinity，应该无限接近于0
// function pow(base, exponent) {
//     if (exponent === 0) return 1
//     if (exponent === 1) return base
//     let isNegative = exponent < 0
//     exponent = exponent < 0 ? -exponent : exponent
//     let result = 1
//     if ((exponent & 1) === 0) {
//         const half = pow(base, exponent >> 1)
//         result = half * half
//     } else {
//         const half = pow(base, (exponent - 1) >> 1)
//         result = half * half * base
//     }
//     return isNegative ? 1 / result : result
// }

