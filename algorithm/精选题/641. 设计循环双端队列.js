// 641. 设计循环双端队列
// https://leetcode.cn/problems/design-circular-deque/


//题解 https://leetcode.cn/problems/design-circular-deque/solution/by-ac_oier-fwhm/

// 循环数组实现
/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
    this.size = 0
    this.k = k
    this.arr = new Array(k)
    this.head = 0
    this.tail = 0
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
    if (this.isFull()) return false
    this.head = (this.head + this.k - 1) % this.k
    this.arr[this.head] = value
    this.size++
    return true
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
    if (this.isFull()) return false
    this.arr[this.tail] = value
    this.tail = (this.tail + 1) % this.k
    this.size++
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
    if (this.isEmpty()) {
        return false
    }
    this.head = (this.head + 1) % this.k
    this.size--
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
    if (this.isEmpty()) {
        return false
    }
    this.tail = (this.tail + this.k - 1) % this.k
    this.size--
    return true
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
    if (this.isEmpty()) return -1
    return this.arr[this.head]
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
    if (this.isEmpty()) return -1
    return this.arr[(this.tail - 1 + this.k) % this.k]
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
    return this.size === 0
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
    return this.size === this.k
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
