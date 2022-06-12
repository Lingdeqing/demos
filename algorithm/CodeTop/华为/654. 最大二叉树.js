// 654. 最大二叉树
// https://leetcode.cn/problems/maximum-binary-tree/

// 树的题目：两种思路
// 1. 遍历节点
// 2. 分解子问题：需要明确递归函数定义
// O(n^2)
function constructMaximumBinaryTree(nums) {
    function dfs(left, right) {
        if (left > right) return null
        let maxIndex = left
        for (let i = left; i <= right; i++) {
            if (nums[i] > nums[maxIndex]) {
                maxIndex = i
            }
        }
        return {
            val: nums[maxIndex],
            left: dfs(left, maxIndex - 1),
            right: dfs(maxIndex + 1, right),
        }
    }
    return dfs(0, nums.length - 1)
}


// 单调栈写法O(n)
// https://leetcode.cn/problems/maximum-binary-tree/solution/zui-da-er-cha-shu-di-gui-he-fei-di-gui-o-5fde/
// 1. 空或者比栈顶小，直接入栈 2. 否则把栈里面的出到栈顶大于当前节点
// 栈里面的是右子树关系，即将入栈和最后一个出栈的节点是左子树的关系
console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]))