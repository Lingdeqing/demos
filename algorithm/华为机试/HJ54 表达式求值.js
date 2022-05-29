// https://www.nowcoder.com/practice/9566499a2e1546c0a257e885dfdbf30d


function calc(str) {
    // return eval('(' + str + ')')
    const ops = [], nums = []
    let sig = 1
    for (let i = 0; i < str.length;) {
        if (str[i] >= '0' && str[i] <= '9') {
            let num = 0
            while (i < str.length && str[i] >= '0' && str[i] <= '9') {
                num = num * 10 + (+str[i])
                i++
            }
            nums.push(sig * num)
            sig = 1
        } else if (str[i] === '(') {
            ops.push('(')
            i++
        } else if (str[i] === ')') {
            while (ops[ops.length - 1] !== '(') {
                compute()
            }
            ops.pop()// 弹出左括号
            i++
        } else {
            while (!canPush(str[i])) {
                compute()
            }
            if (str[i] === '-' && (i === 0 || str[i - 1] === '(')) { // 负号判断，不入栈，直接在下个数字时把符号带上，这边测试用例没有测试到正号，如果是正号，得忽略
                sig = -1
            } else {
                ops.push(str[i])
            }
            i++
        }
    }
    function high(o1, o2) {
        return (o1 === '*' || o1 === '/') && (o2 === '+' || o2 === '-')
    }
    function canPush(ch) {
        return ops.length === 0 || ops[ops.length - 1] === '(' || high(ch, ops[ops.length - 1])
    }
    function compute() {
        const b = nums.pop(), a = nums.pop()
        const op = ops.pop()
        switch (op) {
            case '+':
                nums.push(a + b);
                break;
            case '-':
                nums.push(a - b);
                break;
            case '*':
                nums.push(a * b);
                break;
            case '/':
                nums.push(a / b);
                break;
        }
    }
    while (ops.length > 0) {
        compute()
    }
    return nums[0]
}