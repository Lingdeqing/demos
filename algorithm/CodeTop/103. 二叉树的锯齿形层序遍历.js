// 103. 二叉树的锯齿形层序遍历
// https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/

function zigzagLevelOrder(root) {
    if (!root) return []
    let res = [], queue = [root], row = null, size = 0
    while (queue.length > 0) {
        size = queue.length;
        row = []
        while (size-- > 0) {
            const node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
            res.length % 2 === 0 ? row.push(node.val) : row.unshift(node.val) // 用res.length技巧
        }
        res.push(row)
    }
    return res
}