/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const val2Index = new Map()
    inorder.forEach((val, index) => val2Index.set(val, index))

    function dfs(preStart, preEnd, inStart, inEnd) {
        if (preStart > preEnd) return null
        const index = val2Index.get(preorder[preStart])
        return {
            val: preorder[preStart],
            left: dfs(preStart + 1, preStart + 1 + (index - inStart) - 1, inStart, index - 1),
            right: dfs(preStart + 1 + (index - inStart), preEnd, index + 1, inEnd)
        }
    }
    return dfs(0, preorder.length - 1, 0, preorder.length - 1)
}