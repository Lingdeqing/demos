/**
    题目：
    请实现一个函数用来匹配包括'.'和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。 在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配
 */

// time: 
// space: 
// 有限状态自动机 FSA
function isNumber(s) {
    const states = {
        '开头空格': {
            '空格': '开头空格',
            '+-': '符号位',
            '数字': '整数部分',
            '.': '小数点2',
        },

        '符号位': {
            '数字': '整数部分',
            '.': '小数点2',
        },

        '整数部分': {
            '数字': '整数部分',
            '.': '小数点',
            'eE': '指数符号',
            '空格': '结尾空格'
        },

        '小数点': {
            '数字': '小数部分',
            'eE': '指数符号',
            '空格': '结尾空格'
        },
        '小数部分': {
            '数字': '小数部分',
            'eE': '指数符号',
            '空格': '结尾空格'
        },

        '小数点2': {
            '数字': '小数部分',
        },

        '指数符号': {
            '+-': '指数符号位',
            '数字': '指数部分',
        },
        '指数符号位': {
            '数字': '指数部分',
        },
        '指数部分': {
            '数字': '指数部分',
            '空格': '结尾空格'
        },

        '结尾空格': {
            '空格': '结尾空格'
        }
    }

    const isBlank = c => c === ' '
    const isNum = c => {
        c = c.charCodeAt(0)
        return c >= c0 && c <= c9
    }
    const isE = c => c === 'e' || c === 'E'
    const isSymbol = c => c === '+' || c === '-'
    const isDot = c => c === '.'

    let p = '开头空格'
    for (let c of s) {
        let input = null
        if (isBlank(c)) {
            input = '空格'
        } else if (isNum(c)) {
            input = '数字'
        } else if (isE(c)) {
            input = 'eE'
        } else if (isSymbol(c)) {
            input = '+-'
        } else if (isDot(c)) {
            input = '.'
        } else {
            input = '?' // 未知输入
        }
        if (!(input in states[p])) return false
        p = states[p][input]
    }
    return p === '结尾空格' || p === '整数部分' || p === '小数点' || p === '小数部分' || p === '指数部分'
}
const c0 = '0'.charCodeAt(0)
const c9 = '9'.charCodeAt(0)

// 正则😄
function isNumber(s) {
    return /^\s*(\+|\-)?((\d+)|(\d+\.\d*)|(\.\d+))(e(\+|\-)?\d+)?\s*$/i.test(s)
}