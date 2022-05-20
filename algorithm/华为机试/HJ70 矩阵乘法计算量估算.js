// https://www.nowcoder.com/practice/15e41630514445719a942e004edc0a5b

// 参考 HJ50_四则运算 写法
/**
 * 1. 字母入矩阵栈
 * 2. 入乘号情况
 *    a. 字母 后面 跟字母或( 
 *    b. ) 后面 跟字母或(
 *    入乘号前，注意 出栈 到 栈空 或 栈顶为(
 * 3. 遇到括号
 *    a. (直接入
 *    b. )出栈直到遇到左括号
 * 
 * 出栈：上面运算符出栈的同时，取矩阵栈顶两个矩阵运算，把结果放回数字栈中，同时记录乘的次数
 */
function multiplyTimes(matrix, expr) {
    const nums = [], ops = []
    let times = 0
    let mIndex = 0
    for (let i = 0; i < expr.length; i++) {
        if (isMatrix(expr[i])) {
            nums.push(matrix[mIndex++]);
            // 推入乘号，矩阵后面跟矩阵或者(
            if (i + 1 < expr.length && (isLeft(expr[i + 1]) || isMatrix(expr[i + 1]))) {
                while (ops.length > 0 && !isLeft(ops.at(-1))) {
                    doMutiply()
                }
                ops.push('*')
            }
        } else {
            if (isLeft(expr[i])) { // 左括号
                ops.push('(')
            } else { // 右括号
                // 出栈到左括号
                while (ops.length > 0 && !isLeft(ops.at(-1))) {
                    doMutiply()
                }
                // 出左括号
                ops.pop()


                // 推入乘号，右括号 后面跟矩阵或者(
                if (i + 1 < expr.length && (isLeft(expr[i + 1]) || isMatrix(expr[i + 1]))) {
                    while (ops.length > 0 && !isLeft(ops.at(-1))) {
                        doMutiply()
                    }
                    ops.push('*')
                }
            }
        }
    }
    while (ops.length > 0) {
        doMutiply()
    }

    function isMatrix(ch) {
        return ch >= 'A' && ch <= 'Z'
    }
    function isLeft(ch) {
        return ch === '('
    }
    function doMutiply() {
        ops.pop()
        const m2 = nums.pop(), m1 = nums.pop()
        nums.push([m1[0], m2[1]])
        times += m1[0] * m2[1] * m1[1]
    }
    return times
}

multiplyTimes([[50, 10],
[10, 20],
[20, 5]],
    '(A(BC))')