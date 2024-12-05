/**
 * @param {character[][]} matrix
 * @return {number}
 */

// https://leetcode.cn/problems/maximal-rectangle/solution/zui-da-ju-xing-by-leetcode-solution-bjlu/

var maximalRectangle = function (matrix) {
    if (matrix.length === 0) return 0

    // left[i][j] 表示以(i,j)左边连续的1的个数
    const left = Array.from({ length: matrix.length }, () => new Array(matrix[0].length).fill(0))
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === '1') {
                left[i][j] = j === 0 ? 1 : left[i][j - 1] + 1
            }
        }
    }

    let res = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === '0') continue
            let minWidth = left[i][j]
            for (let k = i; k >= 0; k--) {
                minWidth = Math.min(minWidth, left[k][j])
                const area = minWidth * (i - k + 1)
                res = Math.max(res, area)
            }
        }
    }
    return res
};


var maximalRectangle2 = function (matrix) {
    if (matrix.length === 0) return 0

    // left[i][j] 表示以(i,j)左边连续的1的个数
    const left = Array.from({ length: matrix.length }, () => new Array(matrix[0].length).fill(0))
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === '1') {
                left[i][j] = j === 0 ? 1 : left[i][j - 1] + 1
            }
        }
    }

    let res = 0
    for (let j = 0; j < matrix[0].length; j++) {

        // 单调栈
        // algorithm/od/13. 柱状图中最大的矩形.js

        // 下面第一个小于当前的宽度的柱子索引
        const downMin = [], st = []
        for (let i = matrix.length - 1; i >= 0; i--) {
            while (st.length > 0 && left[st[st.length - 1]][j] >= left[i][j]) st.pop();
            downMin[i] = st.length === 0 ? matrix.length : st[st.length - 1]
            st.push(i)
        }

        // 上面第一个小于当前的宽度的柱子索引
        const upMin = []
        st.length = 0
        for (let i = 0; i < matrix.length; i++) {
            while (st.length > 0 && left[st[st.length - 1]][j] >= left[i][j]) st.pop();
            upMin[i] = st.length === 0 ? -1 : st[st.length - 1]
            st.push(i)
        }

        for (let i = 0; i < matrix.length; i++) {
            res = Math.max(res, (downMin[i] - upMin[i] - 1) * left[i][j])
        }

    }
    return res
};
console.log(maximalRectangle2([
    ["0", "1"],
    ["0", "1"]


]))