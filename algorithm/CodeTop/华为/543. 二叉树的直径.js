// 543. 二叉树的直径
// https://leetcode.cn/problems/diameter-of-binary-tree/

function diameterOfBinaryTree(root) {
    if (!root) return 0
    function maxDepth(root) {
        if (!root) return 0
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
    }
    return Math.max(diameterOfBinaryTree(root.left), diameterOfBinaryTree(root.right),
        maxDepth(root.left) + maxDepth(root.right))
}

function diameterOfBinaryTree2(root) {
    let res = 0
    function maxDepth(root) {
        if (!root) return 0;
        const L = maxDepth(root.left)
        const R = maxDepth(root.right)
        res = Math.max(res, L + R) // 统计每个节点的最大直径
        return Math.max(L, R) + 1
    }
    maxDepth(root)
    return res
}