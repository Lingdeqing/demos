// 962. 最大宽度坡
// https://leetcode.cn/problems/maximum-width-ramp/





// 单调栈
// 证明：https://leetcode.cn/problems/maximum-width-ramp/solution/java-dan-diao-zhan-er-fen-jie-fa-chang-shi-jie-shi/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {
    const stack = []
    for (let i = 0; i < nums.length; i++) {
        if (stack.length === 0 || nums[stack[stack.length - 1]] > nums[i]) {
            stack.push(i)
        }
    }

    let max = 0
    for (let i = nums.length - 1; i >= 0; i--) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[i]) {
            max = Math.max(max, i - stack.pop())
        }
    }
    return max
};


// 排序
// https://leetcode.cn/problems/maximum-width-ramp/solution/zui-da-kuan-du-po-by-leetcode/
var maxWidthRamp = function (nums) {
    const sorted = nums.map((item, i) => i)
    sorted.sort((i, j) => nums[i] - nums[j])


    let max = 0, m = nums.length
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, sorted[i] - m)
        m = Math.min(sorted[i], m)
    }
    return max
};