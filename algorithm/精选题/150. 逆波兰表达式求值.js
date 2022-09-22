// 150. 逆波兰表达式求值
// https://leetcode.cn/problems/evaluate-reverse-polish-notation/


/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = []
    tokens.forEach(item => {
        if (item === '+') {
            stack.push(stack.pop() + stack.pop())
        } else if (item === '-') {
            stack.push(-stack.pop() + stack.pop())
        } else if (item === '*') {
            stack.push(stack.pop() * stack.pop())
        } else if (item === '/') {
            stack.push(Math.trunc(1 / stack.pop() * stack.pop()))
        } else {
            stack.push(+item)
        }
    })
    return stack[0]
};

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))