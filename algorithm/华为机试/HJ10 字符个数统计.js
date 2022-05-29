// https://www.nowcoder.com/practice/eb94f6a5b2ba49c6ac72d40b5ce95f50

function countChar(str) {
    const set = new Set()
    for (let ch of str) {
        set.add(ch)
    }
    return set.size
}