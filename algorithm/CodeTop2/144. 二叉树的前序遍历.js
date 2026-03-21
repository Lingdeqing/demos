// 144. 二叉树的前序遍历
// https://leetcode.cn/problems/binary-tree-preorder-traversal/

function preorderTraversal(root) {
    if (!root) return []
    const res = [root.val]
    res.push(...preorderTraversal(root.left))
    res.push(...preorderTraversal(root.right))
    return res
}