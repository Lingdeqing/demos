/**
    题目：
    给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，那么一共存在6个滑动窗口，他们的最大值分别为{4,4,6,6,6,5}； 针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个： {[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}， {2,3,[4,2,6],2,5,1}， {2,3,4,[2,6,2],5,1}， {2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。
 */

// time: 
// space:
// 单调队列
function maxSlidingWindow(nums, k) {
    const window = new MonotonicQueue(), res = []
    for (let i = 0; i < nums.length; i++) {
        if (i < k - 1) {
            window.push(nums[i])
        } else {
            window.push(nums[i])
            res.push(window.max())
            window.pop(nums[i - k + 1])
        }
    }
    return res;
}

class MonotonicQueue {
    queue = []
    push(n) {
        while (this.queue.length > 0 && this.queue.at(-1) < n) this.queue.pop()
        this.queue.push(n)
    }
    pop(n) {
        if (this.queue.length > 0 && this.queue[0] === n) {
            this.queue.shift()
        }
    }
    max() {
        return this.queue.length > 0 ? this.queue[0] : null
    }
}