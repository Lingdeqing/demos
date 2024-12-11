
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    // 以root为起点向下出发的路径，满足和为targetSum的路径数量
    function dfs1(root, targetSum) {
        if (!root) {
            return 0
        }
        let res = 0
        if (root.val === targetSum) {
            res++
        }
        res += dfs1(root.left, targetSum - root.val)
        res += dfs1(root.right, targetSum - root.val)
        return res
    }

    let res = 0
    // 遍历统计所有起点
    function dfs2(root) {
        if (!root) return 0
        res += dfs1(root, targetSum)
        dfs2(root.left)
        dfs2(root.right)
    }
    dfs2(root)
    return res
}

// https://leetcode.cn/problems/path-sum-iii/solutions/1021490/gong-shui-san-xie-yi-ti-shuang-jie-dfs-q-usa7/?envType=problem-list-v2&envId=2cktkvj 前缀和

var pathSum = function (root, targetSum) {
    const prefixSum = new Map()
    prefixSum.set(0, 1)
    let res = 0
    function dfs(root, sum) {
        if (prefixSum.has(sum - targetSum)) res += prefixSum.get(sum - targetSum);
        prefixSum.set(sum, (prefixSum.get(sum) || 0) + 1)
        if (root.left) dfs(root.left, sum + root.left.val)
        if (root.right) dfs(root.right, sum + root.right.val)
        prefixSum.set(sum, (prefixSum.get(sum) || 0) - 1)
    }
    if (root) dfs(root, root.val)
    return res
}
