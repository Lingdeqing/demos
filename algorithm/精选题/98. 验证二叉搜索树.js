// 98. 验证二叉搜索树
// https://leetcode.cn/problems/validate-binary-search-tree/


// 递归
var isValidBST = function (root) {
    function dfs(node, min, max) {
        if (!node) return true
        if (node.val <= min || node.val >= max) return false
        return dfs(node.left, min, node.val) && dfs(node.right, node.val, max)

    }
    return dfs(root, -Infinity, Infinity)
};

// 中序遍历 - BST升序
var isValidBST = function (root) {
    let prev = -Infinity
    function dfs(node) {
        if (!node) return true
        const l = dfs(node.left)
        if (node.val <= prev) return false
        prev = node.val
        const r = dfs(node.right)
        return l && r

    }
    return dfs(root)
};