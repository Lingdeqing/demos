// 1008. 前序遍历构造二叉搜索树
// https://leetcode.cn/problems/construct-binary-search-tree-from-preorder-traversal/


var bstFromPreorder = function (preorder) {
    function dfs(left, right) {
        if (left > right) return null
        let root = preorder[left], rightRoot = right + 1
        for (let i = left + 1; i <= right; i++) {
            if (preorder[i] > root) {
                rightRoot = i;
                break
            }
        }
        return {
            val: root,
            left: dfs(left + 1, rightRoot - 1),
            right: dfs(rightRoot, right)
        }
    }
    return dfs(0, preorder.length - 1)
};