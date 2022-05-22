// https://www.nowcoder.com/practice/995b8a548827494699dc38c3e2a54ee9




// 正则
function isIpv4(ip) {
    // ((\d)|([1-9]\d)|(1\d\d)|(2[0-4]\d)|(25[0-5]))
    return /^((\d)|([1-9]\d)|(1\d\d)|(2[0-4]\d)|(25[0-5]))(\.((\d)|([1-9]\d)|(1\d\d)|(2[0-4]\d)|(25[0-5]))){3}$/.test(ip) ? 'YES' : 'NO'
}

// 字符串匹配
function isIpv4(ip) {
    ip = ip.split('.')
    return ip.length === 4 && ip.every((item, index) => {
        const n = +item;
        if (n.toString() !== item) return false // 前导0，小数
        return n >= 0 && n <= 255
    }) ? 'YES' : 'NO'
}