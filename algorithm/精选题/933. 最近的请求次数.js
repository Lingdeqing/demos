// 933. 最近的请求次数
// https://leetcode.cn/problems/number-of-recent-calls/

var RecentCounter = function () {
    this.queue = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    this.queue.push(t)
    const start = t - 3000
    while (this.queue.length > 0 && this.queue[0] < start) {
        this.queue.shift()
    }
    return this.queue.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */