// https://www.nowcoder.com/practice/c1f9561de1e240099bdb904765da9ad0

function count(str) {
    const map = new Map()
    for (let ch of str) {
        map.set(ch, (map.get(ch) || 0) + 1)
    }
    return [...map.entries()].sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] < b[0] ? -1 : 1
        }
        return a[1] - b[1]
    }).map(item => item[0]).join('')
}