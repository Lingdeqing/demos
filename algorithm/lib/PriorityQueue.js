/**
 * 优先级队列、堆
 */
module.exports = class PriorityQueue {
    constructor(less = null) {
        this.pq = [null]
        this._less = less
    }
    parent(root) {
        return root >> 1
    }
    left(root) {
        return root * 2
    }
    right(root) {
        return root * 2 + 1
    }
    add(item) {
        this.pq[this.pq.length] = item
        // 上浮
        this.swim(this.pq.length - 1)
    }
    peek() {
        if (this.pq.length < 2) return null
        const max = this.pq[1]
        return max
    }
    poll() {
        if (this.pq.length < 2) return null
        const max = this.pq[1]
        this.pq[1] = this.pq[this.pq.length - 1]
        this.pq.length--
        // 下沉
        this.sink(1)
        return max
    }
    // 上浮
    swim(itemIndex) {
        // 非顶部且小于父节点上浮
        while (itemIndex > 1 && this.less(itemIndex, this.parent(itemIndex))) {
            this.switch(itemIndex, this.parent(itemIndex))
            itemIndex = this.parent(itemIndex)
        }
    }
    // 下沉
    sink(itemIndex) {
        // 左侧子节点存在
        while (this.left(itemIndex) < this.pq.length) {

            // 找到较小的子节点
            let less = this.left(itemIndex)
            // 右节点存在，和左侧比较
            if (this.right(itemIndex) < this.pq.length && this.less(this.right(itemIndex), less)) {
                less = this.right(itemIndex)
            }

            // 比左右节点都小，不必下沉
            if (this.less(itemIndex, less)) break;

            this.switch(less, itemIndex)
            itemIndex = less
        }
    }
    // 比较函数
    less(a, b) {
        if (this._less) {
            return this._less(this.pq[a], this.pq[b])
        }
        return this.pq[a] < this.pq[b]
    }
    // 交换函数
    switch(a, b) {
        const temp = this.pq[a]
        this.pq[a] = this.pq[b]
        this.pq[b] = temp
    }
    size() {
        return this.pq.length - 1
    }
    isEmpty() {
        return this.size() < 1
    }
}