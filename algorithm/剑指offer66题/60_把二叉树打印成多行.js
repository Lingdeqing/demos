/**
    题目：
    从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
 */

// time: 
// space: 
function levelOrder(root) {
    const res = []
    if (!root) return res
    const queue = [root]
    while (queue.length > 0) {
        let len = queue.length;
        const level = [];
        while (len > 0) {
            len--;
            let node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(level)
    }
    return res;
}