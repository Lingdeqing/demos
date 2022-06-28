// 227. 基本计算器 II
// https://leetcode.cn/problems/basic-calculator-ii/

// 最全面的题解 参考 224. 基本计算器

// 刷烂了
function calculate(s) {
    const ops = [], nums = []
    for (let i = 0; i < s.length;) {
        if (s[i] >= '0' && s[i] <= '9') {
            let num = 0;
            while (i < s.length && s[i] >= '0' && s[i] <= '9') {
                num = num * 10 + (+s[i])
                i++
            }
            nums.push(num)
        } else if (s[i] === ' ') {
            i++;
            continue
        } else {
            // 出栈，直到当前操作符优先级大于(等于也不行)栈顶优先级
            while (ops.length > 0 && !((ops.at(-1) === '+' || ops.at(-1) === '-') && (s[i] === '*' || s[i] === '/'))) {
                compute()
            }
            ops.push(s[i])
            i++;
        }
    }
    while (ops.length > 0) {
        compute()
    }
    function compute() {
        const op = ops.pop()
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
                nums.push(Math.floor(a / b))
                break;
        }
    }
    return nums[0]
}