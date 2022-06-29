// 146. LRU 缓存
// https://leetcode.cn/problems/lru-cache/

class DoubleList {
    constructor() {
        this.head = new DoubleList.Node(-1)
        this.tail = new DoubleList.Node(-1)
        this.head.next = this.tail
        this.tail.prev = this.head
    }
    append(node) {
        node.prev = this.tail.prev
        node.next = this.tail;
        this.tail.prev.next = node;
        this.tail.prev = node
    }
    remove(node) {
        const { prev, next } = node
        prev.next = next;
        next.prev = prev;
    }
    removeFirst() {
        const first = this.head.next
        this.remove(first)
        return first
    }
}
DoubleList.Node = function (val, prev = null, next = null) {
    this.val = val
    this.prev = prev
    this.next = next
}
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.map = new Map()
    this.list = new DoubleList()
    this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.map.has(key)) return -1
    const node = this.map.get(key)
    this._makeRecent(key)
    return node.val.value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        // 更新
        this.map.get(key).val = { key, value }
        // 调整到最后
        this._makeRecent(key)
    } else {
        // 插入
        const node = new DoubleList.Node({ key, value })
        this.list.append(node)
        this.map.set(key, node)
        if (this.map.size > this.capacity) {
            // 删除最旧的
            const first = this.list.removeFirst()
            this.map.delete(first.val.key)
        }
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
LRUCache.prototype._makeRecent = function (key) {
    const node = this.map.get(key)
    this.list.remove(node)
    this.list.append(node)
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// ["LRUCache","put","put","get","put","put","get"]
// [[2],[2,1],[2,2],[2],[1,1],[4,1],[2]]
const obj = new LRUCache(2)
obj.put(2, 1)
obj.put(2, 2)
obj.get(1)
obj.put(3, 3)
console.log(obj.get(2))





// 精简版
// 利用js种Map是有序哈希表

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.map = new Map()
    this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.map.has(key)) return -1
    const value = this.map.get(key)
    this.map.delete(key)
    this.map.set(key, value)
    return value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) this.map.delete(key)
    this.map.set(key, value)
    if (this.map.size > this.capacity) {
        this.map.delete(this.map.keys().next().value)
    }
};