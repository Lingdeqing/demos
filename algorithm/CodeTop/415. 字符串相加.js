// 415. 字符串相加
// https://leetcode.cn/problems/add-strings/

function addStrings(num1, num2) {
    let res = '', carry = 0, i = num1.length - 1, j = num2.length - 1;
    while (i >= 0 || j >= 0 || carry) {
        if (i >= 0) carry += +num1[i--]
        if (j >= 0) carry += +num2[j--]
        res = carry % 10 + res
        carry = Math.floor(carry / 10)
    }
    return res
}
console.log(addStrings('11', '123'))