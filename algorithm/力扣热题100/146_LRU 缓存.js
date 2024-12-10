/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.cache.has(key)) return -1
    this._setRecent(key)
    return this.cache.get(key)
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    this.cache.set(key, value)
    this._setRecent(key)
    if (this.cache.size > this.capacity) {
        this.cache.delete(this.cache.keys().next().value)
    }
};
LRUCache.prototype._setRecent = function (key) {
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value)
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var obj = new LRUCache(2)
obj.put(1, 0)
obj.put(2, 2)
obj.get(1)