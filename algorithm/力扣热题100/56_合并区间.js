/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

    // 起点递增，终点递减
    intervals.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1]
        }
        return a[0] - b[0]
    })

    const res = []
    for (let range of intervals) {
        if (res.length === 0) {
            res.push(range)
        } else {
            const prev = res[res.length - 1]
            if (range[0] > prev[1]) {
                res.push(range)
            } else {
                prev[1] = Math.max(range[1], prev[1])
            }
        }
    }
    return res
};