// 641. 设计循环双端队列
// https://leetcode.cn/problems/design-circular-deque/


//题解 https://leetcode.cn/problems/design-circular-deque/solution/by-ac_oier-fwhm/


class Node {
    constructor(value) {
        this.value = value
        this.prev = null
        this.next = null
    }
}
/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
    this.size = 0
    this.k = k
    this.head = new Node(-1)
    this.tail = new Node(-1)
    this.head.next = this.tail
    this.tail.prev = this.head
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
    if (this.isFull()) return false
    const newNode = new Node(value)
    newNode.next = this.head.next;
    newNode.next.prev = newNode;
    newNode.prev = this.head;
    this.head.next = newNode
    this.size++
    return true
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
    if (this.isFull()) return false
    const newNode = new Node(value)
    newNode.prev = this.tail.prev
    newNode.prev.next = newNode
    newNode.next = this.tail
    this.tail.prev = newNode
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
    const next = this.head.next.next
    this.head.next = next
    next.prev = this.head
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
    const prev = this.tail.prev.prev
    prev.next = this.tail
    this.tail.prev = prev
    this.size--
    return true
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
    if (this.isEmpty()) return -1
    return this.head.next.value
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
    if (this.isEmpty()) return -1
    return this.tail.prev.value
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