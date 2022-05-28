// https://www.nowcoder.com/practice/34a597ee15eb4fa2b956f4c595f03218

function isSameNet(mask, ip1, ip2) {
    mask = toNums(mask)
    ip1 = toNums(ip1)
    ip2 = toNums(ip2)

    if (!isValidMask(mask) || !isValidIp(ip1) || !isValidIp(ip2)) {
        return 1
    }

    const iMask = ipToInt(mask)
    const iIp1 = ipToInt(ip1)
    const iIp2 = ipToInt(ip2)

    return (iMask & iIp1) === (iMask & iIp2) ? 0 : 2
}
function isValidIp(ip) {
    return ip.length === 4 && ip.every(item => item >= 0 && item <= 255)
}
function isValidMask(mask) {
    if (!isValidIp(mask)) return false
    const bitStr = toBitStr(mask)
    return bitStr.length === 32 && /^1+0+$/.test(bitStr)
}
function toNums(str) {
    return str.split('.').map(item => +item)
}
function toBitStr(ipArr) {
    return ipArr.map(item => {
        if (item === 0) return '00000000'
        const bits = item.toString(2)
        return bits.padStart(8, '0')
    }).join('')
}
function ipToInt(ipArr) {
    return parseInt(toBitStr(ipArr), 2)
}

console.log(isSameNet('255.255.255.0',
    '192.168.0.254',
    '192.168.0.1'))