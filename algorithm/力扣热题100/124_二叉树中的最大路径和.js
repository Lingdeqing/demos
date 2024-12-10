var maxPathSum = function (root) {

    let res = -Infinity;

    //  返回以root节点为起点向下的最大路径值
    function dfs(root) {
        if (!root) return 0;

        const left = dfs(root.left)
        const right = dfs(root.right)

        const cur = Math.max(root.val, root.val + left, root.val + right)

        res = Math.max(res, root.val, root.val + left, root.val + right, root.val + left + right)

        return cur
    }

    dfs(root);

    return res
};