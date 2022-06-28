// 1302. 层数最深叶子节点的和
// https://leetcode.cn/problems/deepest-leaves-sum/

function deepestLeavesSum(root) {
    if (!root) return 0
    let queue = [root], size = 0, res = 0
    while (queue.length > 0) {
        size = queue.length
        res = 0
        for (let i = 0; i < size; i++) {
            const node = queue.shift()
            res += node.val
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
    }
    return res
}