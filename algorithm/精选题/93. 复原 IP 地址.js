// 93. 复原 IP 地址
// https://leetcode.cn/problems/restore-ip-addresses/



function restoreIpAddresses(s) {
    let res = []
    function bt(ip, start) {
        if (s.length - start - 1 > 3 * (4 - ip.length)) {
            return
        }
        if (ip.length === 4) {
            if (start === s.length) {
                res.push(ip.join('.'))
            }
            return
        }
        for (let len = 1; len <= 3 && len <= s.length - start; len++) {
            const str = s.slice(start, start + len)
            const num = parseInt(str)
            if (num <= 255 && num.toString() === str) { // 没有前导0
                ip.push(str)
                bt(ip, start + len)
                ip.pop()
            }
        }
    }
    bt([], 0)
    return res
}

console.log(restoreIpAddresses("25525511135"))
// abcde ace