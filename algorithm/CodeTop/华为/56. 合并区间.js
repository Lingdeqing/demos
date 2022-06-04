// 56. 合并区间
// https://leetcode.cn/problems/merge-intervals/

// 排序后再合并
// time: O(NlogN+N)
// space: O(N)
function merge(intervals) {
    if (intervals.length === 0) return;
    intervals.sort((a, b) => a[0] - b[0])
    const res = [intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
        const top = res[res.length - 1]
        // if (top[1] >= intervals[i][0]) {
        //     if (top[1] < intervals[i][1]) {
        //         top[1] = intervals[i][1]
        //     }
        // } else {
        //     res.push(intervals[i])
        // }
        if (top[1] >= intervals[i][0]) {
            top[i] = Math.max(top[1], intervals[i][1])
        } else {
            res.push(intervals[i])
        }
    }
    return res
}

console.log(merge([[2, 3], [2, 2], [3, 3], [1, 3], [5, 7], [2, 2], [4, 6]]))

// 双倍快乐
// 1288. 删除被覆盖区间
// https://leetcode.cn/problems/remove-covered-intervals/
function removeCoveredIntervals(intervals) {
    intervals.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1]
        }
        return a[0] - b[0]
    })
    let res = 0, [left, right] = intervals[0]
    for (let i = 1; i < intervals.length; i++) {
        const cur = intervals[i]
        if (left <= cur[0] && right >= cur[1]) {
            res++
        }

        if (right >= cur[0] && right <= cur[1]) {
            right = cur[1]
        }

        if (right < cur[0]) {
            left = cur[0]
            right = cur[1]
        }
    }
    return res
}

// 三倍快乐
// 986. 区间列表的交集
// https://leetcode.cn/problems/interval-list-intersections/
function intervalIntersection(firstList, secondList) {
    let i = 0, j = 0, res = []
    while (i < firstList.length && j < secondList.length) {
        let [a1, a2] = firstList[i]
        let [b1, b2] = secondList[j]
        if (!(b1 > a2 || b2 < a1)) {// 存在交集
            res.push([Math.max(a1, b1), Math.min(a2, b2)])
        }
        if (a2 < b2) {
            i++;
        } else {
            j++
        }
    }
    return res
}