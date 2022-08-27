// 118. 杨辉三角
// https://leetcode.cn/problems/pascals-triangle/


var generate = function (numRows) {
    const res = [[1]]
    if (numRows === 0) return []
    if (numRows === 1) return res
    for (let i = 1; i < numRows; i++) {
        const row = new Array(i + 1).fill(1)
        for (let j = 1; j < i; j++) {
            row[j] = res[i - 1][j - 1] + res[i - 1][j]
        }
        res.push(row)
    }
    return res
};
console.log(generate(10))