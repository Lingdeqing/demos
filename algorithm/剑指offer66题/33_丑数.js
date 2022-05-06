/**
    题目：
        把只包含因子2、3和5的数称作丑数（Ugly Number）。例如6、8都是丑数，但14不是，因为它包含因子7。 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数
 */

// time: 
// space: 
// 动态规划
function uglyNum(n) {
    const dp = [1], a = 1, b = 1, c = 1;
    for (let i = 1; i < n; i++) {
        const n2 = dp[a] * 2, n3 = dp[b] * 3, n5 = dp[c] * 5;
        dp[i] = Math.min(n2, n3, n5) // dp[i]是dp[a]*2、dp[b]*3、dp[c]*5中最小的数字，从前向后递推
        if (n2 === dp[i]) {
            a++
        }
        if (n3 === dp[i]) {
            b++
        }
        if (n5 === dp[i]) {
            c++
        }
    }
    return dp.at(-1)
}

// 最下堆
function uglyNum(n) {
    const heap = new PriorityQueue()
    heap.add(1)
    const set = new Set();
    let current = 1;
    const factors = [2, 3, 5]
    for (let i = 0; i < n; i++) {
        current = heap.poll()
        for (let f of factors) {
            if (!set.has(f * current)) {
                set.add(f * current)
                heap.add(f * current)
            }
        }
    }
    return current
}


class PriorityQueue {
    constructor(less = null) {
        this.pq = [null]
        this._less = less
    }
    parent(root) {
        return Math.floor(root / 2)
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