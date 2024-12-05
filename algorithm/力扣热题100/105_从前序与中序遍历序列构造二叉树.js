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
    for (let index = 0; index < inorder.length; index++) {
        val2Index.set(inorder[index], index)
    }
    function dfs(preStart, preEnd, inStart, inEnd) {
        if (preStart < 0 || preStart >= preorder.length || preStart > preEnd) return null
        const root = {
            val: preorder[preStart],
            left: null,
            right: null
        }
        const i = val2Index.get(root.val)
        const leftNum = i - inStart
        const rightNum = inEnd - i
        root.left = dfs(
            preStart + 1,
            preStart + 1 + leftNum - 1,
            inStart,
            i - 1
        )
        root.right = dfs(
            preStart + 1 + leftNum,
            preStart + 1 + leftNum + rightNum - 1,
            i + 1,
            inEnd
        )
        return root
    }
    return dfs(0, preorder.length - 1, 0, inorder.length - 1)
};