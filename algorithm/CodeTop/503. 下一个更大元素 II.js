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


function nextGreaterElements(nums) {
    let stack = [], ans = []
    for (let i = 2 * nums.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= nums[i % nums.length]) {
            stack.pop()
        }
        ans[i % nums.length] = stack.length === 0 ? -1 : stack[stack.length - 1]
        stack.push(nums[i % nums.length])
    }
    return ans
}