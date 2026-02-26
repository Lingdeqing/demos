var maxPathSum = function (root) {

    let res = -Infinity;

    //  返回以root节点为起点向下的最大路径值
    function dfs(root) {
        if (!root) return 0;

        const left = dfs(root.left)
        const right = dfs(root.right)

        res = Math.max(
            res,
            root.val,
            root.val + left,
            root.val + right,
            root.val + left + right
        )

        return Math.max(
            root.val,
            root.val + left,
            root.val + right
        )

    }

    dfs(root);

    return res
};


var maxPathSum = function (root) {
    function dfs1(root) {
        if (!root) return 0
        return Math.max(root.val, root.val + dfs1(root.left), root.val + dfs1(root.right))
    }

    let res = -Infinity
    function dfs2(root) {
        if (!root) return 0
        res = Math.max(res,
            root.val,
            root.val + dfs1(root.left),
            root.val + dfs1(root.right),
            root.val + dfs1(root.left) + dfs1(root.right)
        )
        dfs2(root.left)
        dfs2(root.right)
    }
    dfs2(root)
    return res
}
