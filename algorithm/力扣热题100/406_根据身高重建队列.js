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
        if (res.length <= item[1]) {
            res.push(item)
        } else {
            res.splice(item[1], 0, item)
        }
    }
    return res
};