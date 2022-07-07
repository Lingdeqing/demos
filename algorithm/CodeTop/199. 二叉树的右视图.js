// 199. 二叉树的右视图
// https://leetcode.cn/problems/binary-tree-right-side-view/

function rightSideView(root) {
    if (!root) return []
    let res = [], queue = [root], size = 0, node = null
    while (queue.length > 0) {
        size = queue.length
        res.push(queue[size - 1].val)
        while (size--) {
            node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }
    return res
}

function rightSideView(root) {
    let res = []
    function dfs(root, depth) {
        if (!root) return
        if (res.length <= depth) {
            res.push(root.val)
        }
        dfs(root.right, depth + 1)
        dfs(root.left, depth + 1)
    }
    dfs(root, 0)
    return res
}