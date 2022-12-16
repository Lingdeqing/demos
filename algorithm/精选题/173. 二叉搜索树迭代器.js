// 173. 二叉搜索树迭代器

// https://leetcode.cn/problems/binary-search-tree-iterator/

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
 */
var BSTIterator = function (root) {
    this.inorder = dfs(root)
    this.index = 0
    function dfs(root, inorder = []) {
        if (!root) return
        if (root.left) dfs(root.left, inorder)
        inorder.push(root.val)
        if (root.right) dfs(root.right, inorder)
        return inorder
    }

};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    return this.inorder[this.index++]
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return this.index < this.inorder.length
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */



// 二叉搜索树中序遍历，栈实现
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
    this.stack = []
    while (root) {
        this.stack.push(root)
        root = root.left
    }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    const cur = this.stack.pop()
    let root = cur.right
    while (root) {
        this.stack.push(root)
        root = root.left
    }
    return cur.val
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return this.stack.length > 0
};


// 二叉搜索树中序遍历，栈实现2
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
    this.stack = []
    this.cur = root
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    while (this.cur) {
        this.stack.push(this.cur)
        this.cur = this.cur.left
    }
    const cur = this.stack.pop()
    this.cur = cur.right
    return cur.val
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return this.stack.length > 0 || !!this.cur
};