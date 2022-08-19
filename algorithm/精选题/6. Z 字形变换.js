// 6. Z 字形变换
// https://leetcode.cn/problems/zigzag-conversion/

// 二维数组模拟
var convert = function (s, numRows) {
    const a = Array.from({ length: s.length }, () => new Array(numRows).fill(''))
    for (let i = 0, k = 0; i < s.length;) {
        for (let j = 0; j < numRows && i < s.length; j++, i++) {
            a[k][j] = s[i]
        }
        k++
        for (let j = 0; j < numRows - 2 && i < s.length; j++, i++) {
            a[k][numRows - 2 - j] = s[i]
            k++
        }
    }

    let res = ''
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < a.length; j++) {
            res += a[j][i]
        }
    }
    return res
};

// k神题解
// https://leetcode.cn/problems/zigzag-conversion/solution/zzi-xing-bian-huan-by-jyd/
var convert = function (s, numRows) {
    if (numRows < 2) return s
    let rows = new Array(numRows).fill(''), flag = -1
    for (let i = 0, j = 0; i < s.length; i++) {
        rows[j] += s[i]
        if (j === numRows - 1 || j === 0) flag = -flag;
        j += flag
    }
    return rows.join('')
}
console.log(convert("AB",
    1))