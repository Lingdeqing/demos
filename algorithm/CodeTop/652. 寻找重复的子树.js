// 652. 寻找重复的子树
// https://leetcode.cn/problems/find-duplicate-subtrees/

// 二叉树序列化
var findDuplicateSubtrees = function findDuplicateSubtrees(root) {
    const res = [], map = new Map()
    function dfs(node) {
        if (!node) return '#'
        const key = [dfs(node.left), dfs(node.right), node.val].join(',')
        if (map.get(key) === 1) {
            res.push(node)
        }
        map.set(key, (map.get(key) || 0) + 1)
        return key
    }
    dfs(root)
    return res
}