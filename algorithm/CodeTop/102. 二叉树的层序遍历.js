// 102. 二叉树的层序遍历
// https://leetcode.cn/problems/binary-tree-level-order-traversal/

// bfs
function levelOrder(root) {
    if (!root) return []
    let queue = [root], res = [], size = 0, temp = null, node = null
    while (queue.length > 0) {
        size = queue.length;
        temp = []
        while (size > 0) {
            node = queue.shift()
            temp.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
            size--
        }
        res.push(temp)
    }
    return res
}