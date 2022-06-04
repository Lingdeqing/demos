// 93. 复原 IP 地址
// https://leetcode.cn/problems/restore-ip-addresses/

function restoreIpAddresses(s) {
    let res = []
    function backtrack(ip, start) {
        if (ip.length === 4 || start === s.length) {
            if (ip.length === 4 && start === s.length) {
                res.push(ip.join('.'))
            }
            return;
        }

        for (let i = start; i < start + 3; i++) {
            const str = s.slice(start, i + 1)
            const num = parseInt(str)
            if (num <= 255 && num.toString().length === str.length) { // 没有前导0
                ip.push(num)
                backtrack(ip, i + 1)
                ip.pop()
            }
        }
    }
    backtrack([], 0)
    return res
}