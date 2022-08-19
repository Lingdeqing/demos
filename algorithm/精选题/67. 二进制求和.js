// 67. 二进制求和
// https://leetcode.cn/problems/add-binary/

var addBinary = function (a, b) {
    let res = '', carry = 0, i = a.length - 1, j = b.length - 1;
    while (carry > 0 || i >= 0 || j >= 0) {
        let sum = carry
        if (i >= 0) {
            sum += +a[i--]
        }
        if (j >= 0) {
            sum += +b[j--]
        }
        res = (sum % 2) + res
        carry = Math.floor(sum / 2)
    }
    return res
};