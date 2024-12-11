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
    function dp(root) {
        if (!root) return 0;
        if (memo.has(root)) return memo.get(root)
        const res = Math.max(
            // 当前不偷
            dp(root.left) + dp(root.right),
            // 当前偷
            root.val + (root.left ? dp(root.left.left) + dp(root.left.right) : 0)
            + (root.right ? dp(root.right.left) + dp(root.right.right) : 0),
        )
        memo.set(root, res)
        return res
    }
    return dp(root)
}