/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const queue = new MonoQueue()
    const res = []
    for (let i = 0; i < nums.length; i++) {
        if (i < k - 1) {
            queue.enqueue(nums[i])
        } else {
            queue.enqueue(nums[i])
            res.push(queue.max())
            queue.dequeue(nums[i - k + 1])
        }
    }
    return res
}
class MonoQueue {
    constructor() {
        this.queue = []
    }
    enqueue(item) {
        while (this.queue.length > 0 && item > this.queue[this.queue.length - 1]) this.queue.pop()
        this.queue.push(item)
    }
    dequeue(item) {
        if (item === this.queue[0]) this.queue.shift()
    }
    max() {
        return this.queue[0]
    }
}