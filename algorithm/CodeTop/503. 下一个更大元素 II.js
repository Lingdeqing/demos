// 503. 下一个更大元素 II
// https://leetcode.cn/problems/next-greater-element-ii/

function nextGreaterElements(nums) {
    const res = new Array(nums.length), stack = [];
    let j = nums.length * 2 - 1, i = 0;
    while (j >= 0) {
        i = j % nums.length;
        while (stack.length > 0 && nums[i] >= stack[stack.length - 1]) {
            stack.pop()
        }
        res[i] = stack.length > 0 ? stack[stack.length - 1] : -1
        stack.push(nums[i])
        j--
    }
    return res
}