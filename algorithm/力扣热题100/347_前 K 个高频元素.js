/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 快速选择
var topKFrequent = function (nums, k) {
    const count = new Map()
    for (let num of nums) {
        count.set(num, (count.get(num) || 0) + 1)
    }

    const arr = [...count.entries()]

    function quickSelect(left, right) {
        if (left > right) return

        let i = left, j = right
        while (i < j) {
            while (i < j && arr[j][1] <= arr[left][1]) j--;
            while (i < j && arr[i][1] >= arr[left][1]) i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        [arr[i], arr[left]] = [arr[left], arr[i]];

        if (i === k - 1) {
            // 前k个已就位
        } else if (i < k - 1) {
            quickSelect(i + 1, right)
        } else if (i > k - 1) {
            quickSelect(left, i - 1)
        }
    }
    quickSelect(0, arr.length - 1)

    const res = []
    for (let i = 0; i < k; i++) {
        res.push(arr[i][0])
    }
    return res
}

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