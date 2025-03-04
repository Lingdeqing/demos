// 406. 根据身高重建队列
// https://leetcode.cn/problems/queue-reconstruction-by-height/

// 题解套路：https://leetcode.cn/problems/queue-reconstruction-by-height/solution/xian-pai-xu-zai-cha-dui-dong-hua-yan-shi-suan-fa-g/
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
    people.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1]
        }
        return b[0] - a[0]
    })
    const res = []
    for (let item of people) {
        res.splice(item[1], 0, item)
    }
    return res
}


// [
//     [7, 0],
//     [4, 4],
//     [7, 1],
//     [5, 0],
//     [6, 1],
//     [5, 2]
// ]
// [
//     [7, 0],
//     [7, 1],
//     [6, 1],
//     [5, 0],
//     [5, 2],
//     [4, 4],
// ]

// [
//     [5, 0],
//     [7, 0],
//     [5, 2],
//     [6, 1],
//     [4, 4],
//     [7, 1],
// ]