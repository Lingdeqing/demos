// 题目描述：
// 给航天器一侧加装长方形和正方形的太阳能板(图中的斜线区域);
// 需要先安装两个支柱(图中的黑色竖条);
// 再在支柱的中间部分固定太阳能板;
// 但航天器不同位置的支柱长度不同;
// 太阳能板的安装面积受限于最短一侧的那支支柱的长度;

// 现提供一组整型数组的支柱高度数据;
// 假设每个支柱间的距离相等为一个单位长度;
// 计算如何选择两根支柱可以使太阳能板的面积最大;

// 输入描述
// 10,9,8,7,6,5,4,3,2,1
// 注释，支柱至少有两根，最多10000根，能支持的高度范围1~10^9的整数

// 柱子的高度是无序的
// 例子中的递减是巧合

// 输出描述
// 可以支持的最大太阳板面积:(10m高支柱和5m高支柱之间)
// 25

// 示例一
// 输入

// 10,9,8,7,6,5,4,3,2,1
// COPY
// 输出

// 25
// COPY
// 备注
// 10米高支柱和5米高支柱之间宽度为5，高度取小的支柱高度也是5，面积为25
// 任取其他两根支柱所能获得的面积都小于25 所以最大面积为25

// 暴力
function solution1(heights) {
    let ans = 0
    for (let i = 0; i < heights.length; i++) {
        let area = heights[i]
        let left = i - 1;
        while (left >= 0 && heights[left] >= heights[i]) {
            area += heights[i]
            left--
        }
        let right = i + 1;
        while (right < heights.length && heights[right] >= heights[i]) {
            area += heights[i]
            right++
        }
        ans = Math.max(ans, area)
    }
    return ans
}

// 题解讲得有点复杂，不利于理解。。。说白了，这题考的基础模型其实就是：在一维数组中对每一个数找到第一个比自己小的元素。这类“在一维数组中找第一个满足某种条件的数”的场景就是典型的单调栈应用场景。
// 单调栈
// lc84. 柱状图中最大的矩形
function largestRectangleArea(heights) {

    // 找到每个柱子下一个比他小的
    const right = [], stack = []
    for (let i = heights.length - 1; i >= 0; i--) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop()
        }
        right[i] = stack.length > 0 ? stack[stack.length - 1] : heights.length
        stack.push(i)
    }

    // 找到每个柱子前一个比他小的
    const left = []
    stack.length = 0
    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop()
        }
        left[i] = stack.length > 0 ? stack[stack.length - 1] : -1
        stack.push(i)
    }

    // 遍历得到最值
    let ans = 0
    for (let i = 0; i < heights.length; i++) {
        ans = Math.max((right[i] - left[i] - 1) * heights[i], ans)
    }
    return ans;
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
// console.log(solution('10,9,8,7,6,5,4,3,2,1'.split(',').map((i) => parseInt(i))))