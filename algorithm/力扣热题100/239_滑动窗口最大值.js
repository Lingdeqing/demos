/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const q = new MonotonicQueue()

    const res = []
    for (let i = 0; i < nums.length; i++) {
        if (i < k - 1) {
            q.push(nums[i])
        } else {
            q.push(nums[i])
            res.push(q.max())
            q.pop(nums[i - k + 1])
        }
    }
    return res
};

class MonotonicQueue {
    constructor() {
        this.q = []
    }
    push(n) {
        while (this.q.length > 0 && this.q[this.q.length - 1] < n) {
            this.q.pop()
        }
        this.q.push(n)
    }
    pop(n) {
        if (this.q[0] === n) {
            this.q.shift()
        }
    }
    max() {
        return this.q[0]
    }
}