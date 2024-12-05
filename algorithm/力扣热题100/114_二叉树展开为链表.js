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
    const left = flatten(root.left)
    let leftTail = left;
    while (leftTail && leftTail.right) {
        leftTail = leftTail.right
    }
    const right = flatten(root.right)

    if (leftTail) {
        leftTail.right = right
        root.right = left
    } else {
        root.right = right
    }
    root.left = null
    return root
};