/**
    题目：
        定义栈的数据结构，请在该类型中实现一个能够得到栈最小元素的min函数。
 */
// time:
// space:
class MinStack {
    stack = []
    minStack = [] // 辅助栈, 记录实际栈对应层下面的最小值
    push(n) {
        this.stack.push(n)
        const min = this.minStack.length > 0 ? Math.min(n, this.minStack.at(-1)) : n
        this.minStack.push(min)
    }
    pop() {
        if (this.stack.length > 0) {
            this.minStack.pop()
            return this.stack.pop()
        }
        return null
    }
    top() {
        return this.stack.length > 0 ? this.stack.at(-1) : null
    }
    min() {
        return this.minStack.length > 0 ? this.minStack.at(-1) : null
    }
}