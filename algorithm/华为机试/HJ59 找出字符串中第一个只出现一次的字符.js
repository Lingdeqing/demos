// https://www.nowcoder.com/practice/e896d0f82f1246a3aa7b232ce38029d4

function findFirstUniq(s) {
    const map = new Map()
    for (let c of s) {
        map.set(c, !map.has(c))
    }
    for (let [key, uniq] of map) {
        if (uniq) {
            return key
        }
    }
    return -1
}
