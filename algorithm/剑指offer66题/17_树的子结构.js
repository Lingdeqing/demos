/**
    题目：
        输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
 */
// time=
// space=
// B是从A任意节点出发的A的子树
function hasSubTree(A, B) {
    return Boolean(A && B) && (isSubTree(A, B) || hasSubTree(A.left, B) || hasSubTree(A.right, B))
}
// B是从A根节点出发的A的子树
function isSubTree(A, B) {
    if (!B) return true
    if (!A) return false
    if (A.val !== B.val) return false
    return isSubTree(A.left, B.left) && isSubTree(A.right, B.right)
}