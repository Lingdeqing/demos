/**
    题目：
        求出1~13的整数中1出现的次数,并算出100~1300的整数中1出现的次数？为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,但是对于后面问题他就没辙了。ACMer希望你们帮帮他,并把问题更加普遍化,可以很快的求出任意非负整数区间中1出现的次数。
 */

// time: 
// space: 
function countDigitOne(n) {
    let result = 0, cur = n % 10, high = Math.floor(n / 10), low = 0, digit = 1;
    // 从低到高遍历每一个位
    while (cur || high) {
        if (cur === 0) {
            // 比如2304的十分位为0时，十分位=1的数字的个数为 00 1 0 ~ 22 1 9 总计000～229=230=23*10
            result += high * digit
        } else if (cur === 1) {
            // 比如2314的十分位为1时，十分位=1的数字的个数为 00 1 0 ~ 23 1 4 总计000～234=235=23*10+4+1
            result += high * digit + low + 1
        } else {
            // 比如2324的十分位为2时，十分位=1的数字的个数为 00 1 0 ~ 23 1 9 总计000～239=240=(23+1)*10
            result += (high + 1) * digit
        }
        low = low + cur * digit
        cur = high % 10;
        high = Math.floor(high / 10);
        digit *= 10;
    }
    return result
}

// 超时啦
function countDigitOne(n) {
    let result = 0
    for (let i = 1; i <= n; i++) {
        let str = i.toString(), len = str.length;
        for (let j = 0; j < len; j++) {
            if (str[j] === '1') {
                result++
            }
        }
    }
    return result
}