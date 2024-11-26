/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
    const memo = new Map()
    // dp[node] 表示以node为根节点的最大收益
    function dp(node) {
        if (!node) return 0

        if (memo.has(node)) return memo.get(node)

        const res = Math.max(
            dp(node.left) + dp(node.right),
            node.val + (node.left ? dp(node.left.left) + dp(node.left.right) : 0)
            + (node.right ? dp(node.right.left) + dp(node.right.right) : 0)
        )
        memo.set(node, res)
        return res
    }
    return dp(root)
};