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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (!root) return null

    let left = flatten(root.left)
    let right = flatten(root.right)
    if (left) {
        root.right = left
        root.left = null
        while (left && left.right) left = left.right  //找到左子树链表的尾巴指向右子树链表
        left.right = right
    }

    return root
}