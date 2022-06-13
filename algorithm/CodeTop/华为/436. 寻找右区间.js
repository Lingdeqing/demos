// 436. 寻找右区间
// https://leetcode.cn/problems/find-right-interval/

function findRightInterval(intervals) {
    intervals.forEach((item, index) => {
        item.push(index)
        return item
    })
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })
    let res = new Array(intervals.length).fill(-1)
    for (let i = 0; i < intervals.length; i++) {
        // for (let j = i; j < intervals.length; j++) {
        //     if (intervals[j][0] >= intervals[i][1]) {
        //         res[intervals[i][2]] = intervals[j][2]
        //         break;
        //     }
        // }
        // 要想到有序查找用二分
        res[intervals[i][2]] = bSearch(intervals, intervals[i][1], i, intervals.length - 1)
    }
    return res
}

function bSearch(intervals, target, left, right) {
    if (intervals[right][0] < target) return -1
    let middle = 0
    while (left <= right) {
        middle = left + Math.floor((right - left) / 2)
        if (intervals[middle][0] > target) {
            right = middle - 1;
        } else if (intervals[middle][0] < target) {
            left = middle + 1;
        } else {
            return intervals[middle][2]
        }
    }
    return intervals[right + 1][2]
}
console.log(findRightInterval([[1, 4], [2, 3], [3, 4]]))