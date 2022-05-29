// https://www.nowcoder.com/practice/de044e89123f4a7482bd2b214a685201

function mergeTable(rows) {
    const map = new Map()
    for (let [index, value] of rows) {
        map.set(index, (map.get(index) || 0) + value)
    }
    return [...map.entries()].sort((a, b) => a[0] - b[0])
}
console.log(mergeTable([
    [0, 1],
    [0, 2],
    [1, 2],
    [3, 4],
]))