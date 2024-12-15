// 85. 最大矩形
// https://leetcode.cn/problems/maximal-rectangle/

// https://leetcode.cn/problems/maximal-rectangle/solution/zui-da-ju-xing-by-leetcode-solution-bjlu/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    const left = []
    for (let i = 0; i < matrix.length; i++) {
        let row = [], count = 0
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === '1') {
                count++
            } else {
                count = 0
            }
            row[j] = count
        }
        left.push(row)
    }

    // 单调栈解法
    let max = 0
    for (let j = 0; j < matrix[0].length; j++) {
        const heights = []
        for (let i = 0; i < matrix.length; i++) {
            heights.push(left[i][j])
        }

        max = Math.max(max, largestRectangleArea(heights))
    }

    return max
};


function largestRectangleArea(heights) {
    const right = [], left = [], stack = []
    for (let i = heights.length - 1; i >= 0; i--) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop()
        }
        right[i] = stack.length > 0 ? stack[stack.length - 1] : heights.length
        stack.push(i)
    }

    stack.length = 0
    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop()
        }
        left[i] = stack.length > 0 ? stack[stack.length - 1] : -1
        stack.push(i)
    }

    let max = 0
    for (let i = 0; i < heights.length; i++) {
        max = Math.max(max, (right[i] - left[i] - 1) * heights[i])
    }
    return max
}

// 暴力
var maximalRectangle = function (matrix) {
    if (matrix.length === 0) return 0
    const left = Array.from({ length: matrix.length }, () => new Array(matrix[0].length))
    for (let i = 0; i < matrix.length; i++) {
        let count = 0
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === '1') {
                count++
            } else {
                count = 0
            }
            left[i][j] = count
        }
    }



    let res = 0
    for (let j = 0; j < matrix[0].length; j++) {
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][j] === '1') {
                let width = left[i][j]
                for (let k = i; k >= 0; k--) {
                    width = Math.min(width, left[k][j])
                    res = Math.max(res, width * (i - k + 1))
                }
            }
        }
    }
    return res

}

var maximalRectangle = function (matrix) {
    if (matrix.length === 0) return 0
    // left[i][j] 表示以(i,j)左边连续的1的个数
    const left = Array.from({ length: matrix.length }, () => new Array(matrix[0].length))
    for (let i = 0; i < matrix.length; i++) {
        let count = 0
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === '1') {
                count++
            } else {
                count = 0
            }
            left[i][j] = count
        }
    }

    let res = 0
    for (let j = 0; j < matrix[0].length; j++) {
        // 单调栈
        // algorithm/od/13. 柱状图中最大的矩形.js
        const st = [], upNextMin = [], downNextMin = []
        // 上面第一个小于当前的宽度的柱子索引
        for (let i = 0; i < matrix.length; i++) {
            while (st.length > 0 && left[st[st.length - 1]][j] >= left[i][j]) st.pop();
            upNextMin[i] = st.length === 0 ? -1 : st[st.length - 1];
            st.push(i)
        }
        // 下面第一个小于当前的宽度的柱子索引
        st.length = 0
        for (let i = matrix.length - 1; i >= 0; i--) {
            while (st.length > 0 && left[st[st.length - 1]][j] >= left[i][j]) st.pop();
            downNextMin[i] = st.length === 0 ? matrix.length : st[st.length - 1];
            st.push(i)
        }

        for (let i = 0; i < matrix.length; i++) {
            res = Math.max(res, left[i][j] * (downNextMin[i] - upNextMin[i] - 1))
        }
    }
    return res

}

console.log(maximalRectangle([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]))