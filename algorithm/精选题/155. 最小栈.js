// 155. 最小栈
// https://leetcode.cn/problems/min-stack/

var MinStack = function () {
    this.stack = []
    this.min = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (this.min.length === 0 || val < this.min[this.min.length - 1]) {
        this.min.push(val)
    } else {
        this.min.push(this.min[this.min.length - 1])
    }
    this.stack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop()
    this.min.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.stack.length > 0) {
        return this.stack[this.stack.length - 1]
    }
    return -1
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if (this.min.length > 0) {
        return this.min[this.min.length - 1]
    }
    return -1
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */