// 394. 字符串解码
// https://leetcode.cn/problems/decode-string/

let right = 0
function decodeString(s) {
    let res = '', i = 0
    while (i < s.length) {
        if (s[i] === ']') {
            // 遇到 ] 结束递归
            right = i // 记录右括号位置
            return res
        } else if (s[i] >= '0' && s[i] <= '9') {
            let num = 0
            while (i < s.length && s[i] >= '0' && s[i] <= '9') {
                num = num * 10 + (+s[i++])
            }
            // 遇到 [ 递归向后处理
            res += decodeString(s.slice(i + 1)).repeat(num)
            i = i + 1 + right; // 跳到右括号位置
        } else {
            res += s[i]
        }
        i++;
    }
    return res
}


function decodeString2(s) {
    function dfs(s, i) {
        let res = '', num = 0, temp = ''
        while (i < s.length) {
            if (s[i] === '[') {
                // 遇到 [ 递归向后处理
                [temp, i] = dfs(s, i + 1)
                res += temp.repeat(num)
                num = 0
            } else if (s[i] === ']') {
                // 遇到 ] 结束递归
                return [res, i]
            } else if (s[i] >= '0' && s[i] <= '9') {
                num = num * 10 + (+s[i])
            } else {
                res += s[i]
            }
            i++;
        }
        return res
    }
    return dfs(s, 0)
}

console.log(decodeString2("3[a2[c]]3[3[a]2[b]]"))