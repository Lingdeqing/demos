// 104. 二叉树的最大深度
// https://leetcode.cn/problems/maximum-depth-of-binary-tree/

function maxDepth(root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
