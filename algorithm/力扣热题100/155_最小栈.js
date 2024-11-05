
var MinStack = function () {
    this.stack = []
    this.min = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(val)
    this.min.push(this.min.length === 0 ? val : Math.min(val, this.min[this.min.length - 1]))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.min.pop()
    return this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack.length > 0 ? this.stack[this.stack.length - 1] : null
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min.length > 0 ? this.min[this.min.length - 1] : null
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */