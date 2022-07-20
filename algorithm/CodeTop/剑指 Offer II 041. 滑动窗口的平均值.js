// 剑指 Offer II 041. 滑动窗口的平均值
// https://leetcode.cn/problems/qIsx9U/

/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.size = size
    this.nums = []
    this.sum = 0
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    this.sum += val
    this.nums.push(val)
    if (this.nums.length > this.size) {
        this.sum -= this.nums.shift()
    }
    return this.sum / this.nums.length
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */