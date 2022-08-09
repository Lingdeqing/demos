// NC97 字符串出现次数的TopK问题
// https://www.nowcoder.com/practice/fd711bdfa0e840b381d7e1b82183b3ee?tpId=196&&tqId=37142&rp=1&ru=/ta/job-code-total&qru=/ta/job-code-total/question-ranking

function topKstrings(strings, k) {
    const map = new Map()
    strings.forEach((str) => {
        map.set(str, 1 + (map.get(str) || 0))
    })

    function ge(a, b) {
        if (a[1] > b[1]) return true
        if (a[1] < b[1]) return false
        return a[0] <= b[0]
    }
    function le(a, b) {
        if (a[1] < b[1]) return true
        if (a[1] > b[1]) return false
        return a[0] >= b[0]
    }
    function quickSort(arr, left, right) {
        let i = left, j = right;
        while (i < j) {
            while (i < j && le(arr[j], arr[left])) j--;
            while (i < j && ge(arr[i], arr[left])) i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        [arr[i], arr[left]] = [arr[left], arr[i]];

        if (i > k) {
            return quickSort(arr, left, i - 1);
        } else if (i < k) {
            return quickSort(arr, i + 1, right);
        } else {
            return arr.slice(0, k)
        }
    }
    const arr = [...map.entries()]

    // return quickSort(arr, 0, map.size - 1)
    // 结果要求排序直接用堆吧
    const res = quickSort(arr, 0, map.size - 1)
    res.sort((a, b) => {
        return ge(a, b) ? -1 : 1
    })
    return res
}
console.log(topKstrings(['8o', '8o', '8o', '46', '46', '46', '46', '46', '78', '78', '78', '78'], 2))

// 小顶堆，先插入k个，k+1比堆顶大，则移除堆顶插入k+1，保持k个元素在堆中，最终取出全部
function topKstrings(strings, k) {
    const map = new Map()
    strings.forEach((str) => {
        map.set(str, 1 + (map.get(str) || 0))
    })

    function le(a, b) {
        if (a[1] < b[1]) return true
        if (a[1] > b[1]) return false
        return a[0] >= b[0]
    }

    let i = 0, pq = new PriorityQueue(le)
    for (let item of map.entries()) {
        if (i < k) {
            pq.add(item)
        } else {
            if (!le(item, pq.peek())) {
                pq.poll()
                pq.add(item)
            }
        }
        i++
    }
    let res = []
    for (let i = 0; i < k; i++) {
        res.unshift(pq.poll())
    }
    return res
}