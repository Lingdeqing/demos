/**
    题目：
        输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。
 */

// time: 
// space: 
// 快速排序实现，划分前k个，不用排完顺序
function getLeastNumbers(arr, k) {
    if (k >= arr.length) return arr
    function quickSort(arr, left, right) {
        // if (left >= right) return // 此处不能再返回啦，要又后面代码判断left他是否是k
        let i = left, j = right;
        while (i < j) {
            while (i < j && arr[j] >= arr[left]) j--;
            while (i < j && arr[i] <= arr[left]) i++;
            ;[arr[i], arr[j]] = [arr[j], arr[i]];
        }
        ;[arr[i], arr[left]] = [arr[left], arr[i]];
        if (k < i) {
            return quickSort(arr, left, i - 1)
        } else if (k > i) {
            return quickSort(arr, i + 1, right)
        } else {
            return arr.slice(0, k)
        }
    }
    return quickSort(arr, 0, arr.length - 1)
}


// 快速排序实现，取前k个
function getLeastNumbers(arr, k) {
    function quickSort(arr, left, right) {
        if (left >= right) return
        let i = left, j = right;
        while (i < j) {
            while (i < j && arr[j] >= arr[left]) j--;
            while (i < j && arr[i] <= arr[left]) i++;
            ;[arr[i], arr[j]] = [arr[j], arr[i]];
        }
        ;[arr[i], arr[left]] = [arr[left], arr[i]];
        quickSort(arr, left, i - 1)
        quickSort(arr, i + 1, right)
        return arr
    }
    quickSort(arr, 0, arr.length - 1)
    return arr.slice(0, k)
}



// 大根堆，先插入k个到堆中，k+1后的与堆顶比较，比堆顶小，就替换插入堆中，保持堆中k个元素，最后把堆中的全部出来就是结果。
function getLeastNumbers(arr, k) {
    const pq = new PriorityQueue((a, b) => a > b)

    for (let i = 0; i < arr.length; i++) {
        if (pq.size() < k) {
            pq.add(arr[i])
        } else {
            if (pq.peek() > arr[i]) {
                pq.poll()
                pq.add(arr[i])
            }
        }
    }

    const result = []
    while (!pq.isEmpty()) {
        result.push(pq.poll())
    }

    return result
}

// 小根堆，无脑全部插入后，在取k次堆顶
function getLeastNumbers(arr, k) {
    const pq = new PriorityQueue()
    arr.forEach(item => {
        pq.add(item)
    })
    let result = []
    while (k && !pq.isEmpty()) {
        result.push(pq.poll())
        k--
    }
    return result
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