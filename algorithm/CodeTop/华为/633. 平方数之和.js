// 633. 平方数之和
// https://leetcode.cn/problems/sum-of-square-numbers/

// 穷举 O(根号c)
function judgeSquareSum(c) {
    const k = Math.sqrt(c)
    for (let i = 0; i <= k; i++) {
        const b = Math.sqrt(c - i * i);
        // if (b === Math.floor(b)) {
        if (Number.isInteger(b)) {
            return true
        }
    }
    return false
}

// 双指针
function judgeSquareSum(c) {
    let a = 0, b = Math.floor(Math.sqrt(c))
    while (a <= b) {
        let ss = a * a + b * b
        if (ss > c) {
            b--;
        } else if (ss < c) {
            a++
        } else {
            return true
        }
    }
    return false
}