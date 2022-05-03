/**
    题目：
        操作给定的二叉树，将其变换为源二叉树的镜像
 */
// time=
// space=
function reverseTree(tree) {
    if (!tree) return null
    const left = reverseTree(tree.left)
    const right = reverseTree(tree.right)
    tree.left = right
    tree.right = left
    return tree
}