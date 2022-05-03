/**
    题目：
        从上往下打印出二叉树的每个节点，同层节点从左至右打印。
 */
// time:
// space:
// 层次遍历
function levelWalk(tree) {
    if (!tree) return null
    const result = []
    const queue = [tree];
    while (queue.length > 0) {
        const current = queue.shift()
        if (current.left) {
            queue.push(current.left)
        }
        if (current.right) {
            queue.push(current.right)
        }
        result.push(current.val)
    }
    return result
}