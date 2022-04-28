/**
    题目：
        用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
 */
class Queue {
    s1 = []
    s2 = []
    push(item) {
        this.s1.push(item)
    }
    pop() {
        this.top()
        if (this.s2.length > 0) {
            return this.s2.pop()
        }
        return null
    }
    top() {
        if (this.s2.length > 0) {
            return this.s2.at(-1)
        } else if (this.s1.length > 0) {
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop())
            }
            return this.s2.at(-1)
        } else {
            // empty
            return null
        }
    }
}


class Stack {
    topItem = null
    queue = []
    push(item) {
        if (!this.topItem) {
            this.topItem = item
        }
        this.queue.push(item)
    }
    pop() {
        let length = this.queue.length
        if (length === 0) return null
        while (length-- > 2) {
            this.queue.push(this.queue.shift())
        }
        if (this.queue.length > 1) {
            this.topItem = this.queue.shift()
            this.queue.push(this.topItem)
        }
        return this.queue.shift()
    }
    top() {
        return this.topItem;
    }
}