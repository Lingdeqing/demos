// 94. 二叉树的中序遍历
// https://leetcode.cn/problems/binary-tree-inorder-traversal/

function inorderTraversal(root) {
    let res = []
    if (!root) return res
    res.push(...inorderTraversal(root.left, res))
    res.push(root.val)
    res.push(...inorderTraversal(root.right, res))
    return res
}