/**
    题目：
        输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4，5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）
 */
// time:
// space:
// 模拟入栈出栈操作，因为每个数字不同，所以pushed和popped确定唯一的操作序列，模拟到最后栈不是空就有问题
function validateStackSequences(pushed, popped) {
    let stack = [], i = 0, j = 0;
    for (; i < pushed.length && j < popped.length; i++) {
        stack.push(pushed[i])
        while (stack.length > 0 && stack.at(-1) === popped[j]) {
            stack.pop()
            j++
        }
    }
    return !stack.length > 0
}