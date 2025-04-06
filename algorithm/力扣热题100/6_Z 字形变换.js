
// k神题解
// https://leetcode.cn/problems/zigzag-conversion/solution/zzi-xing-bian-huan-by-jyd/
function convert(s, numRows) {
    if (numRows === 1) return s
    let i = 0, j = 0, flag = 1, res = new Array(numRows).fill('')
    for (let i = 0; i < s.length; i++) {
        res[j] += s[i]
        if (j === numRows - 1) {
            flag = -1
        } else if (j === 0) {
            flag = 1
        }
        j += flag
    }
    return res.join('')
}
// 二维数组模拟
function convert(s, numRows) {
    let arr = [], i = 0
    while (i < s.length) {
        const row = new Array(numRows).fill('')
        for (let j = 0; i < s.length && j < numRows; j++) {
            row[j] = s[i++]
        }
        arr.push(row)
        for (let j = 0; i < s.length && j < numRows - 2; j++) {
            const row = new Array(numRows).fill('')
            row[numRows - (j + 2)] = s[i++]
            arr.push(row)
        }
    }
    let res = ''
    for (let j = 0; j < numRows; j++) {
        for (let i = 0; i < arr.length; i++) res += arr[i][j]
    }
    return res
};
convert('PAYPALISHIRING', 3)
