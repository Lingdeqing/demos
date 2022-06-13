// 1145. 二叉树着色游戏
// https://leetcode.cn/problems/binary-tree-coloring-game/

// 最好的策略是选择与x紧挨着的节点，x的父节点、左子、右子
function btreeGameWinningMove(root, n, x) {
    const node = findNode(root, x)
    if (!node) return false;

    const leftCount = countNode(node.left)
    if (leftCount > n / 2) return true
    const rightCount = countNode(node.right)
    if (rightCount > n / 2) return true
    return (n - leftCount - rightCount - 1) > n / 2
}
function findNode(root, x) {
    if (!root) return null;
    if (root.val === x) return root;
    return findNode(root.left, x) || findNode(root.right, x)
}
function countNode(root) {
    if (!root) return 0;
    return countNode(root.left) + countNode(root.right) + 1
}