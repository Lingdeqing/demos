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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []
    const st = [root]
    const res = []
    while (st.length) {
        let levelWidth = st.length;
        const levelVal = []
        while (levelWidth--) {
            const node = st.shift();
            levelVal.push(node.val)
            if (node.left) {
                st.push(node.left)
            }
            if (node.right) {
                st.push(node.right)
            }
        }
        res.push(levelVal)
    }
    return res
};