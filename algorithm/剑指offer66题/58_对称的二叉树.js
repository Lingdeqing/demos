/**
    题目：
    请实现一个函数，用来判断一颗二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。
 */

// time: 
// space: 
function isSymmetric(root) {
    function recur(rootA, rootB) {
        if (!rootA && !rootB) return true;
        if (rootA && !rootB) return false;
        if (!rootA && rootB) return false;
        return rootA.val === rootB.val && recur(rootA.left, rootB.right) && recur(rootA.right, rootB.left)
    }
    if (!root) return true
    return recur(root.left, root.right)
}