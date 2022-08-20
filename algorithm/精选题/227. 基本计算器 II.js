// 227. 基本计算器 II
// https://leetcode.cn/problems/basic-calculator-ii/

function calculate(s) {
    let ops = [], nums = [], isMinus = false, i = 0
    while (i < s.length) {
        if (s[i] === ' ') {
            i++
        } else if (s[i] >= '0' && s[i] <= '9') {
            let num = 0
            while (s[i] >= '0' && s[i] <= '9') {
                num = num * 10 + +(s[i])
                i++
            }
            nums.push(num)
            isMinus = true // 前面是右括号和数字，就是减号
        } else if (s[i] === '(') {
            ops.push('(')
            i++
            isMinus = false // 前面是右括号和数字，就是减号
        } else if (s[i] === ')') {
            while (ops[ops.length - 1] !== '(') {
                compute()
            }
            ops.pop()
            i++;
            isMinus = true // 前面是右括号和数字，就是减号
        } else {
            if (s[i] === '-' && !isMinus) {
                // 负号判定，负号优先级最高，不需要出栈
                ops.push('负')
            } else {
                while (!canPush(s[i])) {
                    compute()
                }
                ops.push(s[i])
            }
            i++
            isMinus = false // 前面是右括号和数字，就是减号
        }
    }
    while (ops.length > 0) compute()
    function compute() {
        const op = ops.pop()
        if (op === '负') {
            nums.push(-nums.pop())
            return
        }
        const b = nums.pop(), a = nums.pop()
        switch (op) {
            case '+':
                nums.push(a + b)
                break
            case '-':
                nums.push(a - b)
                break
            case '*':
                nums.push(a * b)
                break
            case '/':
                nums.push(Math.floor(a / b))
                break
        }
    }
    function canPush(op) {
        const top = ops[ops.length - 1]
        // return ops.length === 0 || top === '(' || ((op === '*' || op === '/') && (top === '+' || top === '-'))
        return ops.length === 0 || top === '(' || ((op === '*' || op === '/') && (top === '+' || top === '-'))
    }
    return nums[0]
}