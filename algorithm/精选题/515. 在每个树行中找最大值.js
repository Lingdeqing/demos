// 515. 在每个树行中找最大值
// https://leetcode.cn/problems/find-largest-value-in-each-tree-row/

function largestValues(root) {
    if (!root) return []
    let queue = [root], size = 0, node = null, max = 0, ans = []
    while (queue.length > 0) {
        size = queue.length;
        max = -Infinity;
        while (size--) {
            node = queue.shift()
            max = Math.max(max, node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        ans.push(max)
    }
    return ans
}