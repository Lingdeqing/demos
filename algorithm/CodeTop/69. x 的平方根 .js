// 69. x 的平方根 
// https://leetcode.cn/problems/sqrtx/

// 二分
function mySqrt2(x) {
    if (x <= 1) return x
    let EPSILON = 1e-7;
    let left = 0, right = x;
    while (left <= right) {
        let mid = left + (right - left) / 2
        let pow = mid * mid;
        if (Math.abs(pow - x) < EPSILON) {
            return Math.floor(mid)
        } else if (pow > x) {
            right = mid
        } else {
            left = mid
        }
    }
}

// 牛顿迭代法
function mySqrt(x) {
    let EPSILON = 1e-7, res = x;
    while (Math.abs(res * res - x) > EPSILON) {
        res = 0.5 * (res + x / res)
    }
    return Math.floor(res)
}
console.log(mySqrt(1024))