/**
    题目：
        二叉树的深度
 */

// time: 
// space: 
// dfs
function treeDepth(root) {
    return root ? Math.max(treeDepth(root.left), treeDepth(root.right)) + 1 : 0
}


// bfs
function levelOrder(root) {
    if (!root) return 0
    let queue = [root], depth = 0
    while (queue.length > 0) {
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        depth++
    }
    return depth
}


