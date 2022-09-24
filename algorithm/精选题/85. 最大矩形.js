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


console.log(maximalRectangle([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]))