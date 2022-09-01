// 622. 设计循环队列
// https://leetcode.cn/problems/design-circular-queue/
/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    this.arr = new Array(k)
    this.head = 0;
    this.tail = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.isFull()) return false
    this.arr[this.tail % this.arr.length] = value
    this.tail++
    return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.isEmpty()) return false
    this.head++
    return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if (this.isEmpty()) return -1
    return this.arr[this.head % this.arr.length]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if (this.isEmpty()) return -1
    return this.arr[(this.tail - 1) % this.arr.length]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.head === this.tail
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return this.tail - this.head === this.arr.length
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */