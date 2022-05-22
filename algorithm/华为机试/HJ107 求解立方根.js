// https://www.nowcoder.com/practice/caf35ae421194a1090c22fe223357dca

// 平方根：https://leetcode.cn/problems/sqrtx/solution/x-de-ping-fang-gen-by-leetcode-solution/
// 平方根官方题解只适合整数的平方(比如4、9、25等，其他比如sqrt(3)=1.0)
// 平方根的题目考虑牛顿迭代法，用切线无限接近于零点的方法

// 注意考虑小数和负数
// 要灵活使用二分，无限逼近目标值
function search(n) {
    n = parseFloat(n)
    if (n === 0) return 0
    if (n === 1) return 1;
    let sig = 1;
    if (n < 0) {
        n = -n;
        sig = -1;
    }
    let left = 0, right = n, mid
    if (n < 1) {
        left = n;
        right = 1;
    }
    mid = left + ((right - left) / 2)
    while (Math.abs(mid ** 3 - n) > 0.001) {
        if (mid ** 3 < n) {
            left = mid;
        } else {
            right = mid;
        }
        mid = left + ((right - left) / 2)
    }
    return sig * (mid).toFixed(1)
}

// 穷举
// function search(n) {
//     if (n === 1) return n;
//     let symbol = 1;
//     if (n < 0) {
//         n = -n;
//         symbol = -1;
//     }
//     const t = n * 1000
//     let minDis = Infinity, res = 0;
//     for (let i = 0; i <= t; i++) {
//         const dis = Math.abs(i ** 3 - t)
//         if (dis < minDis) {
//             minDis = dis;
//             res = i
//         }
//     }
//     return symbol * (res / 10).toFixed(1)
// }
console.log(search(0.5))