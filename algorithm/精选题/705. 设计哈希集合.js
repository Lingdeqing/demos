// 705. 设计哈希集合
// https://leetcode.cn/problems/design-hashset/

// 因为key范围是：0 <= key <= 106
// 所以可以考虑简单数组的形式
var MyHashSet = function () {
    this.nodes = new Array(1000001)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    this.nodes[key] = true
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    this.nodes[key] = false
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    return !!this.nodes[key]
};


// bitmap方式
var MyHashSet = function () {
    this.nodes = new Array(40000) // 1000001/32 = 15625.015625 4w个桶就够了 js里面整数和浮点数存储都是64位，但是整数位运算会转换为32位有符号整数 https://juejin.cn/post/6882240762915323912
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    this.setVal(key, true)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    this.setVal(key, false)
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    const nodeIndex = Math.floor(key / 32)
    const bitIndex = Math.floor(key % 32)
    return !!(this.nodes[nodeIndex] & (1 << bitIndex))
};

MyHashSet.prototype.setVal = function (key, flag) {
    const nodeIndex = Math.floor(key / 32)
    const bitIndex = Math.floor(key % 32)
    if (flag) {
        this.nodes[nodeIndex] = this.nodes[nodeIndex] | (1 << bitIndex)
    } else {
        this.nodes[nodeIndex] = this.nodes[nodeIndex] & ~(1 << bitIndex)
    }
};



// 链地址法 https://leetcode.cn/problems/design-hashset/solution/she-ji-ha-xi-ji-he-by-leetcode-solution-xp4t/
var MyHashSet = function () {
    this.base = 769 //质数因子减少冲突概率 https://blog.csdn.net/zhishengqianjun/article/details/79087525
    this.nodes = Array.from({ length: this.base }, () => new Array())
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    const nodeIndex = key % this.base
    for (let i = 0; i < this.nodes[nodeIndex].length; i++) {
        if (this.nodes[nodeIndex][i] === key) {
            return
        }
    }
    this.nodes[nodeIndex].push(key)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    const nodeIndex = key % this.base
    for (let i = 0; i < this.nodes[nodeIndex].length; i++) {
        if (this.nodes[nodeIndex][i] === key) {
            this.nodes[nodeIndex].splice(i, 1)
            return
        }
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    const nodeIndex = key % this.base
    for (let i = 0; i < this.nodes[nodeIndex].length; i++) {
        if (this.nodes[nodeIndex][i] === key) {
            return true
        }
    }
    return false
};
