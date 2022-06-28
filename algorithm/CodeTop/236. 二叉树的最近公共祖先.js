// 236. 二叉树的最近公共祖先
// https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/

function lowestCommonAncestor(root, p, q) {
    if (!root) return null;
    if (p === root || q === root) return root
    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)
    if (left && right) {
        return root
    }
    if (left || right) {
        return left || right
    }
    return null
}