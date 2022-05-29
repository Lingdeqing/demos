// https://www.nowcoder.com/practice/e45e078701ab4e4cb49393ae30f1bb04

function reverseStr(str) {
    // return str.split('').reverse().join('')
    let res = ''
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i]
    }
    return res
}