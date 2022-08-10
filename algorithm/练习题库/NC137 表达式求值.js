// NC137 表达式求值
// https://www.nowcoder.com/practice/c215ba61c8b1443b996351df929dc4d4?tpId=196&&tqId=37183&rp=1&ru=/ta/job-code-total&qru=/ta/job-code-total/question-ranking

// 最全面的题解 参考 224. 基本计算器

function solve(s) {
    let ops = [], nums = [], i = 0, isMinus = false
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
                break;
            case '-':
                nums.push(a - b)
                break;
            case '*':
                nums.push(a * b)
                break;
            case '/':
                nums.push(a / b)
                break;
        }
    }
    function canPush(op) {
        if (ops.length === 0) return true
        const top = ops[ops.length - 1]
        if (top === '(') return true
        return ['*', '/'].includes(op) && ['+', '-'].includes(top)
    }
    while (i < s.length) {
        if (s[i] === ' ') {
            i++
        } else if (s[i] >= '0' && s[i] <= '9') {
            let num = 0
            while (s[i] >= '0' && s[i] <= '9') {
                num = num * 10 + (+s[i])
                i++
            }
            nums.push(num)
            isMinus = true // 前面是数字或者右括号就是减号
        } else if (s[i] === '(') {
            ops.push('(')
            i++;
            isMinus = false
        } else if (s[i] === ')') {
            while (ops.length > 0 && ops[ops.length - 1] !== '(') {
                compute()
            }
            ops.pop()
            i++;
            isMinus = true // 前面是数字或者右括号就是减号
        } else {
            if (s[i] === '-' && !isMinus) { // 负号处理
                ops.push('负')
            } else {
                while (!canPush(s[i])) {
                    compute()
                }
                ops.push(s[i])
            }
            i++
            isMinus = false
        }
    }
    while (ops.length > 0) compute()
    return nums[0]
}

console.log(solve("(3+4)*-(-5+(2-3))"))