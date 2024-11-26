/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = new Map()
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    return [...map.entries()].sort((b, a) => a[1] - b[1]).slice(0, k).map(item => item[0])
};

// 优先级队列
var topKFrequent = function (nums, k) {
    const map = new Map()
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    const pq = new MinPriorityQueue({
        compare: (a, b) => {
            return a[1] - b[1]
        }
    })
    for (let entry of map) {
        pq.enqueue(entry)
        if (pq.size() > k) {
            pq.dequeue()
        }
    }

    let res = []
    for (let i = k - 1; i >= 0; i--) {
        res[i] = pq.dequeue()[0]
    }
    return res

};