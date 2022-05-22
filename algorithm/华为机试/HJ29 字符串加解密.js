// https://www.nowcoder.com/practice/2aa32b378a024755a3f251e75cbf233a


function encode(s) {
    let res = '', aCode = codeOf('a'), ACode = codeOf('A'), zeroCode = codeOf('0')
    for (let ch of s) {
        if (ch >= 'a' && ch <= 'z') {
            res += String.fromCharCode((codeOf(ch) - aCode + 1) % 26 + ACode)
        } else if (ch >= 'A' && ch <= 'Z') {
            res += String.fromCharCode((codeOf(ch) - ACode + 1) % 26 + aCode)
        } else if (ch >= '0' && ch <= '9') {
            res += String.fromCharCode((codeOf(ch) - zeroCode + 1) % 10 + zeroCode)
        } else {
            res += ch
        }
    }
    return res
}
function codeOf(c) {
    return c.charCodeAt(0)
}
function decode(s) {
    let res = '', aCode = codeOf('a'), ACode = codeOf('A'), zeroCode = codeOf('0')
    for (let ch of s) {
        if (ch >= 'a' && ch <= 'z') {
            res += String.fromCharCode((codeOf(ch) - aCode - 1 + 26) % 26 + ACode)
        } else if (ch >= 'A' && ch <= 'Z') {
            res += String.fromCharCode((codeOf(ch) - ACode - 1 + 26) % 26 + aCode)
        } else if (ch >= '0' && ch <= '9') {
            res += String.fromCharCode((codeOf(ch) - zeroCode - 1 + 10) % 10 + zeroCode)
        } else {
            res += ch
        }
    }
    return res
}