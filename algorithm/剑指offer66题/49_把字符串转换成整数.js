/**
    题目：
        将一个字符串转换成一个整数，要求不能使用字符串转换整数的库函数。 数值为0或者字符串不是一个合法的数值则返回0。

        假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−231,  231 − 1]。如果数值超过这个范围，请返回  INT_MAX (231 − 1) 或 INT_MIN (−231) 。
 */

// time: 
// space:
function strToInt(str) {
    let res = 0, negative = 1
    let i = 0;
    const intMax = 2 ** 31 - 1, intMin = -(2 ** 31), boundry = Math.floor(2 ** 31 / 10)
    while (i < str.length && str[i] === ' ') i++;
    if (i < str.length) {
        if (str[i] === '-') {
            negative = -1;
            i++;
        } else if (str[i] === '+') {
            i++;
        }
        while (i < str.length) {
            const c = str.charCodeAt(i)
            if (c < n0 || c > n9) {
                break;
            } else {
                if (res > boundry || (res === boundry && c - n0 > 7)) {
                    return negative === 1 ? intMax : intMin
                }
                res = 10 * res + (c - n0)
            }
            i++
        }
    }

    return res && negative * res
}

const n0 = '0'.charCodeAt(0)
const n9 = '9'.charCodeAt(0)

function strToInt(str) {
    let res = 0, negative = 1, bits = []
    let i = 0;
    while (i < str.length && str[i] === ' ') i++;
    if (i < str.length) {
        if (str[i] === '-') {
            negative = -1;
            i++;
        } else if (str[i] === '+') {
            i++;
        }
        while (i < str.length) {
            const c = str.charCodeAt(i)
            if (c < n0 || c > n9) {
                break;
            } else {
                bits.push(c - n0);
            }
            i++
        }
    }

    for (let i = bits.length - 1; i >= 0; i--) {
        // if(res > )
        // 判断是否越界
        res += bits[i] * (10 ** (bits.length - i - 1))
    }
    return res && negative * res
}


function strToInt(str) {
    const num = /^\s*-?\d*/.exec(str)
    return num ? +num : 0;
}