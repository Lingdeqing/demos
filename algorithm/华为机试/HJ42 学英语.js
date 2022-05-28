// https://www.nowcoder.com/practice/1364723563ab43c99f3d38b5abef83bc

// 和人名币类似
function translateNum(num) {
    const numArr = []
    while (num) {
        numArr.push(num % 1000)
        num = Math.floor(num / 1000)
    }

    let res = []
    const dict1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const dict2 = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const dict3 = ['', 'thousand', 'million', 'billion']
    const dict4 = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', ' seventeen', 'eighteen', 'nineteen']
    numArr.forEach((numItem, index) => {
        let str = [], k = 0, a = 0
        while (numItem) {
            const cur = numItem % 10
            if (k === 0) {// 个位
                if (cur !== 0) {
                    str.unshift(dict1[cur])
                }
                a = cur;//记录下个位，给11到19时用
            } else if (k === 1) {//十位
                if (cur === 1 && a !== 0) { // 11到19
                    str = [dict4[a]]
                } else if (cur !== 0) {
                    str.unshift(dict2[cur])
                }
            } else {//百位
                if (cur !== 0) {
                    if (str.length > 0) {
                        str.unshift('and')
                    }
                    str.unshift(dict1[cur] + ' hundred')
                }
            }
            numItem = Math.floor(numItem / 10)
            k++
        }


        str = str.join(' ')
        if (str) {
            res.unshift(str + ' ' + dict3[index])
        }
    })

    return res.join(' ')
}
console.log(translateNum(
    1652510
))