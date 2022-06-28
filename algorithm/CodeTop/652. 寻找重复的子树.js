// 652. 寻找重复的子树
// https://leetcode.cn/problems/find-duplicate-subtrees/

// 二叉树序列化
function findDuplicateSubtrees(root) {
    let map = new Map(), res = []
    function dfs(root) {
        if (!root) return '#'
        const left = dfs(root.left)
        const right = dfs(root.right)
        const subTree = left + ',' + right + ',' + root.val
        map.set(subTree, (map.get(subTree) || 0) + 1)
        if (map.get(subTree) === 2) {
            res.push(root)
        }
        return subTree
    }
    dfs(root)
    return res
}
