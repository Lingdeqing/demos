/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const map = {
        '1': 'I',
        '5': 'V',
        '10': 'X',
        '50': 'L',
        '100': 'C',
        '500': 'D',
        '1000': 'M',
    }
    let cur = 0, res = ''
    while (num) {
        if (num >= 1000) {
            num -= 1000
            res += map[1000]
        }

        else if (num >= 500) {
            cur = ~~(num / 100)
            if (cur === 9) {
                num -= 900
                res += map[100] + map[1000]
            } else {
                num -= 500
                res += map[500]
            }
        } else if (num >= 100) {
            cur = ~~(num / 100)
            if (cur === 4) {
                num -= 400
                res += map[100] + map[500]
            } else {
                num -= 100
                res += map[100]
            }
        }



        else if (num >= 50) {
            cur = ~~(num / 10)
            if (cur === 9) {
                num -= 90
                res += map[10] + map[100]
            } else {
                num -= 50
                res += map[50]
            }
        } else if (num >= 10) {
            cur = ~~(num / 10)
            if (cur === 4) {
                num -= 40
                res += map[10] + map[50]
            } else {
                num -= 10
                res += map[10]
            }
        }



        else if (num >= 5) {
            cur = ~~(num / 1)
            if (cur === 9) {
                num -= 9
                res += map[1] + map[10]
            } else {
                num -= 5
                res += map[5]
            }
        } else if (num >= 1) {
            cur = ~~(num / 1)
            if (cur === 4) {
                num -= 4
                res += map[1] + map[5]
            } else {
                num -= 1
                res += map[1]
            }
        }

    }
    return res
};


var intToRoman = function (num) {
    const map = {
        '1': 'I',
        '5': 'V',
        '10': 'X',
        '50': 'L',
        '100': 'C',
        '500': 'D',
        '1000': 'M',
    }
    let cur = 0, res = ''
    for (let boundary = 1000; boundary >= 1; boundary /= 10) {
        while (num >= 5 * boundary) {
            cur = ~~(num / boundary)
            if (cur === 9) {
                num -= boundary * 10 - boundary
                res += map[boundary] + map[boundary * 10]
            } else {
                num -= 5 * boundary
                res += map[5 * boundary]
            }
        }
        while (num >= boundary) {
            cur = ~~(num / boundary)
            if (cur === 4) {
                num -= 5 * boundary - boundary
                res += map[boundary] + map[5 * boundary]
            } else {
                num -= boundary
                res += map[boundary]
            }
        }
    }
    return res
};

// https://leetcode.cn/problems/integer-to-roman/solutions/774611/zheng-shu-zhuan-luo-ma-shu-zi-by-leetcod-75rs/


var intToRoman = function (num) {
    const map = {
        '1': 'I',
        '4': 'IV',
        '5': 'V',
        '9': 'IX',
        '10': 'X',
        '40': 'XL',
        '50': 'L',
        '90': 'XC',
        '100': 'C',
        '400': 'CD',
        '500': 'D',
        '900': 'CM',
        '1000': 'M',
    }
    let cur = 0, res = ''
    for (let [val, symbol] of Object.entries(map).reverse()) {
        val = +val
        while (num >= val) {
            res += symbol
            num -= val
        }
        if (num === 0) break
    }

    return res
};


var intToRoman = function (num) {
    const thousands = ['', 'M', 'MM', 'MMM']
    const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
    const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
    const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']

    return thousands[~~(num / 1000)] + hundreds[~~((num % 1000) / 100)] + tens[~~((num % 100) / 10)]
        + ones[~~((num % 10) / 1)]
};