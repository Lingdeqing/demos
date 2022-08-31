// 225. 用队列实现栈
// https://leetcode.cn/problems/implement-stack-using-queues/


var MyStack = function () {
    this.queue = []
    this.topItem = null
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.topItem = x
    this.queue.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    if (this.queue.length > 0) {
        let k = this.queue.length - 1;
        while (k) {
            const item = this.queue.shift()
            this.topItem = item
            this.queue.push(item)
            k--
        }
        return this.queue.shift()
    }
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.topItem
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.queue.length === 0
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */