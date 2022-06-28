// 29. 两数相除
// https://leetcode.cn/problems/divide-two-integers/

// 快速幂：https://leetcode.cn/problems/powx-n/solution/powx-n-by-leetcode-solution/
// 此题可以使用 快速乘+二分查找 https://leetcode.cn/problems/divide-two-integers/solution/gong-shui-san-xie-dui-xian-zhi-tiao-jian-utb9/
// 快速乘和快速幂方法类似，快速乘是转换为加，快速幂转换为乘

function divide(dividend, divisor) {
    // 数字范围[-2^31, 2^31-1]
    const MIN = -2147483648, MAX = 2147483647
    // 特殊情况，绝对值超出正数范围的负数
    if (dividend === MIN && divisor === -1) {
        return MAX
    }
    // 下面二分范围在[1, -dividend]，-dividend不能超过MAX
    if (dividend === MIN && divisor === 1) {
        return MIN
    }

    // 负数范围更大，转为负数运算
    let isNeg = true;
    if ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) isNeg = false;
    if (dividend > 0) dividend = -dividend
    if (divisor > 0) divisor = -divisor

    // 都是整数，所以范围肯定在[1, -dividend]
    let low = 1, high = -dividend, res = 0
    while (low <= high) {
        let mid = low + ((high - low) >> 1)

        if (le(divisor, mid, dividend)) {// divisor*mid>=dividend
            res = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    // 返回是否a*n>=x
    // a, x是负数，mid是正数
    function le(a, n, x) {
        let res = 0
        while (n) {
            if ((n & 1) === 1) {// if (n % 2 === 1) res += a;
                // if (res + a < x) {
                //     return false
                // }
                if (res < x - a) { // 防止溢出
                    return false
                }
                res += a;
            }
            // if(a+a<x){
            //     return false
            // }
            if (n !== 1) { // 注意， n === 1时，这时候循环即将跳出来了 a+=a不会算入贡献中
                if (a < x - a) { // 防止溢出
                    return false
                }
            }
            a += a;
            n >>= 1;// n = Math.floor(n / 2)
        }
        return true
    }


    return isNeg ? -res : res
}

console.log(divide(117, 3))