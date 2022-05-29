// https://www.nowcoder.com/practice/c4f11ea2c886429faf91decfaf6a310b

function mergeArr(a1, a2) {
    return [...new Set(a1.concat(a2))].sort((a, b) => a - b)
}