// 224. 基本计算器
// https://leetcode.cn/problems/basic-calculator/

// 注意这题只有+-()，没有*/ 简单很多，可以展开括号，括号前面是-号则，括号里面每一项得添负
// 官解：https://leetcode.cn/problems/basic-calculator/solution/ji-ben-ji-suan-qi-by-leetcode-solution-jvir/
function calculate(s) {
    let ops = [], nums = [], num = 0, isNeg = false, isMinus = false
    for (let i = 0; i < s.length;) {
        if (s[i] === ' ') {
            i++
        } else if (isNum(s[i])) {
            num = 0
            while (isNum(s[i])) {
                num = num * 10 + (+s[i])
                i++
            }
            nums.push(num)
            isMinus = true // 前面是数字或者右括号，就是减号
        } else if (s[i] === '(') {
            ops.push(s[i])
            i++
            isMinus = false
        } else if (s[i] === ')') {
            while (ops[ops.length - 1] !== '(') compute(nums, ops);
            ops.pop()
            i++;
            isMinus = true // 前面是数字或者右括号，就是减号
        } else {
            if (s[i] === '-' && !isMinus) {
                // 负号判定，负号优先级最高，不需要出栈
                ops.push('负')
            } else {
                while (!canPush(ops, s[i])) compute(nums, ops);
                ops.push(s[i])
            }
            i++
            isMinus = false
        }
    }
    while (ops.length > 0) compute(nums, ops);
    return nums[0]
}
function isNum(ch) {
    return ch >= '0' && ch <= '9'
}
function canPush(ops, ch) {
    return ops.length === 0 ||
        ops[ops.length - 1] === '(' || (
            (ch === '*' || ch === '/') &&
            (ops[ops.length - 1] === '+' || ops[ops.length - 1] === '-')
        )
}
function compute(nums, ops) {
    const op = ops.pop()
    if (op === '负') {
        nums.push(-nums.pop())
        return
    }
    const b = nums.pop(), a = nums.pop()
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

console.log(calculate("5 - - -3"))