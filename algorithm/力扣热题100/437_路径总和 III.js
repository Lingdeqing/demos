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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    function rootSum(node, targetSum) {
        if (!node) {
            return 0;
        }
        let count = 0
        if (node.val === targetSum) {
            count++
        }
        count += rootSum(node.left, targetSum - node.val)
        count += rootSum(node.right, targetSum - node.val)
        return count;
    }

    if (!root) return 0
    return rootSum(root, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum)
};