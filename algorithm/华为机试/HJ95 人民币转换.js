// https://www.nowcoder.com/practice/00ffd656b9604d1998e966d555005a4b


// 按照需求模拟
function rmb(num) {
    const numMap = ' 壹贰叁肆伍陆柒捌玖';
    // '壹、贰、叁、肆、伍、陆、柒、捌、玖、拾、佰、仟、万、亿、元、角、分、零、整'
    const [integerStr, decimalStr] = num.split('.')

    // 小数部分
    let decimal = ''
    if (decimalStr !== '00') {
        if (decimalStr[0] !== '0') {
            decimal = numMap[decimalStr[0]] + '角'
        }
        if (decimalStr[1] !== '0') {
            decimal += numMap[decimalStr[1]] + '分'
        }
    }

    // 整数部分
    let res = ''
    let intArr = []
    let integer = +integerStr
    while (integer) {
        intArr.push(integer % 10000)
        integer = Math.floor(integer / 10000)
    }
    intArr = intArr.map((num, index) => {
        let numStr = num.toString().split('').reverse()
        let str = ''
        for (let i = 0; i < numStr.length; i++) {
            if (i === 0) { // 个位
                if (numStr[i] !== '0') {
                    str = numMap[numStr[i]] + str
                }
            }

            if (i === 1) { // 十位
                if (numStr[i] === '1') {
                    str = '拾' + str
                } else if (numStr[i] !== '0') {
                    str = numMap[numStr[i]] + '拾' + str
                } else {// 十位为0，个位不为0
                    if (str !== '' && str[0] !== '零') {
                        str = '零' + str
                    }
                }
            }

            if (i === 2) { // 百位
                if (numStr[i] !== '0') {
                    str = numMap[numStr[i]] + '佰' + str
                } else {// 百位为0，个十位不为0
                    if (str !== '' && str[0] !== '零') {
                        str = '零' + str
                    }
                }
            }

            if (i === 3) { // 千位
                if (numStr[i] !== '0') {
                    str = numMap[numStr[i]] + '仟' + str
                } else {// 千位为0，个十百位不为0
                    if (str !== '' && str[0] !== '零') {
                        str = '零' + str
                    }
                }
            }
        }

        if (index === 0) {
            res = str + '元'
        }
        if (index === 1) {
            res = str + '万' + (intArr[index - 1] < 1000 ? '零' : '') + res
        }
        if (index === 2) {
            res = str + '亿' + (intArr[index - 1] < 1000 ? '零' : '') + res
        }

        return str
    })



    return '人民币' + (intArr.length > 0 ? res : intArr.length === 0 && decimal ? '' : '零元') + (decimal || '整')
}

// 稍微合并下代码
function rmb(num) {
    const numMap = ' 壹贰叁肆伍陆柒捌玖';
    const unitMap = '元万亿'
    const bitUnitMap = ' 拾佰仟'
    // '壹、贰、叁、肆、伍、陆、柒、捌、玖、拾、佰、仟、万、亿、元、角、分、零、整'
    const [integerStr, decimalStr] = num.split('.')

    // 小数部分
    let decimal = ''
    if (decimalStr !== '00') {
        if (decimalStr[0] !== '0') {
            decimal = numMap[decimalStr[0]] + '角'
        }
        if (decimalStr[1] !== '0') {
            decimal += numMap[decimalStr[1]] + '分'
        }
    }

    // 整数部分
    let res = ''
    let intArr = []
    let integer = +integerStr
    while (integer) {
        intArr.push(integer % 10000)
        integer = Math.floor(integer / 10000)
    }
    intArr = intArr.map((num, index) => {
        let numStr = num.toString().split('').reverse()
        let str = ''
        for (let i = 0; i < numStr.length; i++) {
            if (i === 0) { // 个位
                if (numStr[i] !== '0') {
                    str = numMap[numStr[i]] + str
                }
            } else if (i === 1 && numStr[i] === '1') { // 十位=1特殊处理
                str = '拾' + str
            } else if (numStr[i] !== '0') {
                str = numMap[numStr[i]] + bitUnitMap[i] + str
            } else {// 百位为0，个十位不为0
                if (str !== '' && str[0] !== '零') {
                    str = '零' + str
                }
            }
        }

        // 拼接结果
        res = str + unitMap[index] + (index > 0 && intArr[index - 1] < 1000 ? '零' : '') + res

        return str
    })

    return '人民币' + (intArr.length > 0 ? res : intArr.length === 0 && decimal ? '' : '零元') + (decimal || '整')
}
console.log(rmb('5.07'))