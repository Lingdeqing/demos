// https://www.nowcoder.com/practice/9999764a61484d819056f807d2a91f1e

// 逆波兰：中缀转后缀解法
function calc(str) {
    const suffix = infixToSuffix(str), stack = [];
    for (let ch of suffix) {
        switch (ch) {
            case '+':
                stack.push(stack.pop() + stack.pop())
                break;
            case '-':
                stack.push(-stack.pop() + stack.pop())
                break;
            case '*':
                stack.push(stack.pop() * stack.pop())
                break;
            case '/':
                stack.push(1 / stack.pop() * stack.pop())
                break;
            default:
                stack.push(ch)
        }
    }
    return stack[0]
}
// 中缀转后缀
function infixToSuffix(str) {
    const op = [], res = []
    for (let i = 0; i < str.length;) {
        const ch = str[i]
        if (isDigit(ch)) {
            let num = 0;
            let j = i;
            while (j < str.length && isDigit(str[j])) {
                num = num * 10 + (+str[j]);
                j++
            }
            i = j;
            res.push(num)
        } else {
            if (isLeft(ch) || op.length === 0 || isLeft(op.at(-1))) {
                op.push(ch)
            } else if (isRight(ch)) {
                // 弹出运算符到结果栈直到遇到左括号
                while (op.length > 0 && !isLeft(op.at(-1))) {
                    res.push(op.pop())
                }
                // 弹出左括号
                op.pop()
            } else {
                if (!higher(ch, op.at(-1))) { // 将栈里面小于等于当前运算符放到结果栈中 并且不是左括号
                    while (op.length > 0 && !higher(ch, op.at(-1)) && !isLeft(op.at(-1))) {
                        res.push(op.pop())
                    }
                }
                op.push(ch)
            }
            i++
        }
    }

    // 将符号栈中剩余的符号放入结果栈中
    while (op.length > 0) {
        res.push(op.pop())
    }

    // 结果栈就是后缀表达式了
    return res
}
function isDigit(ch) {
    const n = +ch;
    return n >= 0 && n <= 9
}
function isLeft(ch) {
    return ch === '(' || ch === '[' || ch === '{'
}
function isRight(ch) {
    return ch === ')' || ch === ']' || ch === '}'
}
function higher(op1, op2) {
    return (op1 === '*' || op1 === '/') && (op2 === '+' || op2 === '-')
}
if (!Array.prototype.at) {
    Array.prototype.at = function (n) {
        return this[(n + this.length) % this.length]
    }
}