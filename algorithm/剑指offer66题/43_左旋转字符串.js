/**
    题目：
        汇编语言中有一种移位指令叫做循环左移（ROL），现在有个简单的任务，就是用字符串模拟这个指令的运算结果。对于一个给定的字符序列S，请你把其循环左移K位后的序列输出。例如，字符序列S=”abcXYZdef”,要求输出循环左移3位后的结果，即“XYZdefabc”。是不是很简单？OK，搞定它！
 */

// time: 
// space:
// 由于js中字符串不可变性，所以无法写出原地算法
// c语言可以原地调整字符串
// abcde左移3位
// 1. abcde翻转edcba
// 2. 翻转cba edabc
// 3. 翻转ed  deabc
// slice
function rotateStr(s, n) {
    const i = s.length - n % s.length
    return s.slice(i) + s.slice(0, i)
}
// 拼接字符串
function rotateStr(s, n) {
    let res = ''
    for (let i = n; i < s.length + n; i++) {
        res += s[i % s.length]
    }
    return res
}
// 拼接数组
function rotateStr(s, n) {
    let res = []
    for (let i = n; i < s.length + n; i++) {
        res.push(s[i % s.length])
    }
    return res.join('')
}