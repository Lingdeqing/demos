

class MinPriorityQueue2 {
    constructor({ compare }) {
        this.pq = [null]
        this.compare = (a, b) => compare(a, b) < 0
    }
    parent(index) {
        return index >> 1
    }
    left(index) {
        return index * 2
    }
    right(index) {
        return index * 2 + 1
    }

    enqueue(item) {
        this.pq.push(item)
        this.swim(this.pq.length - 1)
    }
    dequeue() {
        if (this.isEmpty()) return null
        const res = this.pq[1];
        this.pq[1] = this.pq[this.pq.length - 1]
        this.pq.length--;
        this.sink(1)
        return res;
    }
    // 下沉
    sink(index) {
        while (this.left(index) < this.pq.length) {
            let min = index;
            let left = this.left(index)
            if (left < this.pq.length && this.compare(this.pq[left], this.pq[min])) {
                min = left
            }
            let right = this.right(index)
            if (right < this.pq.length && this.compare(this.pq[right], this.pq[min])) {
                min = right
            }
            if (min !== index) {
                [this.pq[min], this.pq[index]] = [this.pq[index], this.pq[min]]
                index = min
            } else {
                break
            }
        }
    }
    // 上浮
    swim(index) {
        while (index > 1 && this.compare(this.pq[index], this.pq[this.parent(index)])) {
            const p = this.parent(index);
            [this.pq[index], this.pq[p]] = [this.pq[p], this.pq[index]];
            index = p;
        }
    }
    isEmpty() {
        return this.pq.length <= 1
    }
}

module.exports = MinPriorityQueue2