// 43. 字符串相乘
// https://leetcode.cn/problems/multiply-strings/

function multiply(num1, num2) {
    if (num1.length < num2.length) {
        ;[num1, num2] = [num2, num1];
    }
    let res = '0'
    for (let i = num2.length - 1, k = 0; i >= 0; i--) {
        const cur = multiplyN(num1, +num2[i]) + '0'.repeat(k);
        k++
        res = strAdd(res, cur)
    }

    // 9>=n>=0
    function multiplyN(num1, n) {
        if (n === 0) return 0
        let carry = 0, res = '';
        for (let i = num1.length - 1; i >= 0; i--) {
            const cur = n * num1[i] + carry
            res = (cur % 10) + res
            carry = ~~(cur / 10)
        }
        if (carry) {
            res = carry + res
        }
        return res
    }

    function strAdd(str1, str2) {
        let carry = 0, res = '', i = str1.length - 1, j = str2.length - 1;
        while (carry || i >= 0 || j >= 0) {
            let cur = carry
            if (i >= 0) cur += +str1[i--]
            if (j >= 0) cur += +str2[j--]
            res = (cur % 10) + res
            carry = ~~(cur / 10)
        }
        return res
    }
    return res
}