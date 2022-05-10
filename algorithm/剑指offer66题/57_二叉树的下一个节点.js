/**
    题目：
    给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。
 */

// time: 
// space: 
function nextNode(node) {
    if (!node) return null;
    // 有右子树
    if (node.right) {
        let left = node.right;
        while (left.left) {
            left = left.left
        }
        return left
    }
    // 没有右子树，找到第一个左节点的父节点
    while (node.parent) {
        if (node.parent.left === node) {
            return node.parent
        }
        node = node.parent
    }
    return null
}
