// 706. 设计哈希映射
// https://leetcode.cn/problems/design-hashmap/
// 链地址法
var MyHashMap = function () {
    this.base = 769
    this.nodes = Array.from({ length: this.base }, () => [])
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    const nodeIndex = key % this.base;
    const list = this.nodes[nodeIndex]
    for (let node of list) {
        if (node.key === key) {
            node.value = value
            return
        }
    }
    list.push({
        key,
        value
    })
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    const nodeIndex = key % this.base;
    const list = this.nodes[nodeIndex]
    for (let node of list) {
        if (node.key === key) {
            return node.value
        }
    }
    return -1
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    const nodeIndex = key % this.base;
    const list = this.nodes[nodeIndex]
    for (let i in list) {
        if (list[i].key === key) {
            list.splice(i, 1)
            return
        }
    }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */