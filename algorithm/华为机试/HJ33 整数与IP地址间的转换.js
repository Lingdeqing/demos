// https://www.nowcoder.com/practice/66ca0e28f90c42a196afd78cc9c496ea

function ipToInt(ip) {
    ip = ip.split('.').map(item => parseInt(item))
    let res = 0
    ip.forEach((item) => {
        // res = (res << 8) + item // '183.31.75.22' 这个测试用例会变成负数，不知道为啥
        res = res * 256 + item
    })
    return res
}
function ipToInt2(ip) {
    return parseInt(ip.split('.').map(item => {
        let b = parseInt(item).toString(2), zero = 8 - b.length
        for (let i = 0; i < zero; i++) {
            b = '0' + b
        }
        return b
    }).join(''), 2)
}

function intToIp(n) {
    let mask = 0xff, i = 4, res = []
    while (i--) {
        res.push((n >> (8 * i) & mask))
    }
    return res.join('.')
}
console.log(ipToInt('183.31.75.22'))
console.log((183 << 16).toString('16'))
console.log(parseInt('10110111000000000000000000000000', 2))