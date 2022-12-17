// 230. 二叉搜索树中第K小的元素
// https://leetcode.cn/problems/kth-smallest-element-in-a-bst/
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
 * @param {number} k
 * @return {number}
 */
// 递归
var kthSmallest = function (root, k) {
    function dfs(root) {
        if (!root) return null
        if (root.left) {
            const res = dfs(root.left)
            if (res) return res
        }
        if (k === 1) {
            return root
        }
        k--
        if (root.right) {
            const res = dfs(root.right)
            if (res) return res
        }
        return null
    }

    return dfs(root).val
};



// 栈
var kthSmallest = function (root, k) {
    let stack = []
    while (root || stack.length > 0) {
        while (root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        if (--k === 0) break;
        root = root.right
    }
    return root.val
};


// 预先统计子节点数量
var kthSmallest = function (root, k) {
    const map = new Map()
    function count(root) {
        if (!root) return 0
        map.set(root, 1 + count(root.left) + count(root.right))
        return map.get(root)
    }
    count(root)

    let node = root;
    while (node) {
        const leftNum = map.get(node.left) || 0
        if (k - 1 === leftNum) break
        else if (k - 1 > leftNum) {
            node = node.right
            k = k - leftNum - 1
        } else {
            node = node.left
        }
    }
    return node.val
};