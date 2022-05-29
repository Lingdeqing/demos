// https://www.nowcoder.com/practice/9999764a61484d819056f807d2a91f1e

// 最清楚解法
// 直接用双栈做
/**
 * 1. 数字入数字栈
 * 2. 遇到+-x/运算符，优先级 "+"="-"<"x"="/"
 *    a. 栈空或栈顶为( 直接入
 *    c. 栈顶优先级<当前字符，直接入
 *    b. 栈顶优先级>=当前字符，则需要 出栈直到栈顶低于或栈空或遇到(
 * 3. 遇到括号
 *    a. (直接入
 *    b. )出栈直到遇到左括号
 * 
 * 上面运算符出栈的同时，取数字栈顶两个数字运算，把结果放回数字栈中
 */
 function calc(str) {
    const nums = [], ops = []
    for (let i = 0; i < str.length;) {
        if (isDigit(str[i])) {
            let num = 0
            while (i < str.length && isDigit(str[i])) {
                num = num * 10 + (+str[i])
                i++;
            }
            nums.push(num)
        } else if (isLeft(str[i])) {
            ops.push('(');
            i++;
        } else if (isRight(str[i])) {
            while (!isLeft(ops.at(-1))) {
                calcOnce()
            }
            ops.pop() // 左括号出栈
            i++;
        } else { // +-*/
            if (canPushOp(str[i])) { // 栈空 或 栈顶为( 或 当前字符优先级>栈顶
                ops.push(str[i])
            } else {
                while (!(canPushOp(str[i]))) {
                    calcOnce()
                }
                ops.push(str[i])
            }   
            i++
        }
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
    function higher(a, b) {
        return (a === '*' || a === '/') && (b === '+' || b === '-')
    }
    function canPushOp(ch) {
        return ops.length === 0 || isLeft(ops.at(-1)) || higher(ch, ops.at(-1))
    }
    function calcOnce() {
        const symbol = ops.pop()
        const n2 = nums.pop(), n1 = nums.pop()
        switch (symbol) {
            case '+':
                nums.push(n1 + n2)
                break;
            case '-':
                nums.push(n1 - n2)
                break;
            case '*':
                nums.push(n1 * n2)
                break;
            case '/':
                nums.push(n1 / n2)
                break;
        }
    }
    while (ops.length > 0) {
        calcOnce()
    }
    return nums.at(-1)
}


// 递归解法
// 第一步，先考虑无括号的情况，先乘除后加减，这个用栈很容易解决，遇到数字先压栈，如果下一个是乘号或除号，先出栈，和下一个数进行乘除运算，再入栈，最后就能保证栈内所有数字都是加数，最后对所有加数求和即可。

// 第二步，遇到左括号，直接递归执行第一步即可，最后检测到右括号，返回括号内的计算结果，退出函数，这个结果作为一个加数，返回上一层入栈。
function calc(str) {
    let index = 0
    function compute() {
        const stack = []
        let preOp = '+'

        while (index < str.length) {
            const ch = str[index]

            // 处理数字
            let num = 0
            if (ch === '(' || ch === '{' || ch === '[') { // 左括号，递归计算 
                index++;
                num = compute()
            } else if (isDigit(ch)) {
                while (index < str.length && isDigit(str[index])) {
                    num = num * 10 + (+str[index]);
                    index++
                }
            }

            // 处理运算符
            switch (preOp) {
                case '+':
                    stack.push(num);
                    break;
                case '-':
                    stack.push(-num)
                    break;
                case '*':
                    stack[stack.length - 1] *= num
                    break;
                case '/':
                    stack[stack.length - 1] /= num
                    break;
            }

            // 读取下一个符号
            preOp = str[index];
            index++;
            // 处理右括号，直接结束循环，递归返回
            if (preOp === '}' || preOp === ')' || preOp === ']') {
                break;
            }
        }

        let res = 0
        for (let n of stack) {
            res += n;
        }
        return res
    }

    function isDigit(ch) {
        const n = +ch;
        return n >= 0 && n <= 9
    }
    return compute()
}

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