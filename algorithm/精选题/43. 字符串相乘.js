// 43. 字符串相乘
// https://leetcode.cn/problems/multiply-strings/

function multiply(num1, num2) {
    if (num1.length < num2.length) {
        return multiply(num2, num1)
    }
    if (num2 === '0') return '0'

    let res = ''
    for (let i = num2.length - 1; i >= 0; i--) {
        let fact = multiplyN(num1, +num2[i]) + '0'.repeat(num2.length - 1 - i)
        res = strAdd(fact, res)
    }

    function multiplyN(num, N) {
        let i = num.length - 1, carry = 0, res = ''
        while (carry || i >= 0) {
            let fact = 0
            if (i >= 0) {
                fact += N * num[i--]
            }
            fact += carry
            res = (fact % 10) + res
            carry = Math.floor(fact / 10)
        }
        return res

    }

    function strAdd(num1, num2) {
        let i = num1.length - 1, j = num2.length - 1, carry = 0, res = ''
        while (carry || i >= 0 || j >= 0) {
            let sum = carry;
            if (i >= 0) {
                sum += +num1[i--]
            }
            if (j >= 0) {
                sum += +num2[j--]
            }
            res = (sum % 10) + res
            carry = Math.floor(sum / 10)
        }
        return res
    }
    return res
};


console.log(multiply("123",
    "456"))