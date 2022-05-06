/**
    题目：
        输入一棵二叉树，判断该二叉树是否是平衡二叉树。
 */

// time: 
// space: 
// 前序遍历，从顶至底
function isBalanced(root) {
    if (!root) return true
    const leftDepth = treeDepth(root.left)
    const rightDepth = treeDepth(root.right)
    return Math.abs(leftDepth - rightDepth) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}
function treeDepth(root) {
    return root ? Math.max(treeDepth(root.left), treeDepth(root.right)) + 1 : 0
}

// better
// 后序遍历，从底至顶
function isBalanced(root) {
    function recur(root) {
        if (!root) return 0
        const leftDepth = recur(root.left)
        if (leftDepth === -1) return -1;
        const rightDepth = recur(root.right)
        if (rightDepth === -1) return -1;
        return Math.abs(leftDepth - rightDepth) <= 1 ? Math.max(leftDepth, rightDepth) + 1 : -1
    }
    return recur(root) !== -1
}