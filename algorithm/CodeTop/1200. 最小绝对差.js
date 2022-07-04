// 1200. 最小绝对差
// https://leetcode.cn/problems/minimum-absolute-difference/

function minimumAbsDifference(arr) {
    arr.sort((a, b) => a - b)
    let res = [], min = Infinity
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] < min) {
            min = arr[i] - arr[i - 1]
            res = [[arr[i - 1], arr[i]]]
        } else if (arr[i] - arr[i - 1] === min) {
            res.push([arr[i - 1], arr[i]])
        }
    }
    return res
}