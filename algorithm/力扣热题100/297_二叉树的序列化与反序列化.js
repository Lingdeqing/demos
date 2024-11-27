/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    const res = []
    function recur(root) {
        if (!root) {
            res.push('#')
            return
        }
        res.push(root.val)
        recur(root.left)
        recur(root.right)
    }
    recur(root)
    return res.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    data = data.split(',')
    function recur() {
        if (data.length === 0) return null
        const cur = data.shift()
        if (cur === '#') return null
        const node = {
            val: +cur,
            left: null,
            right: null
        }
        node.left = recur()
        node.right = recur()
        return node
    }
    return recur()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */



console.log(serialize(deserializeArray([1, 2, 3, null, null, 4, 5])))
console.log(deserialize(serialize(deserializeArray([1, 2, 3, null, null, 4, 5]))))

function deserializeArray(nodes) {
    const root = {
        val: nodes.shift()
    }
    const queue = [root]
    while (queue.length && nodes.length) {
        const node = queue.shift()

        const leftVal = nodes.shift()
        if (leftVal !== null) {
            const leftNode = {
                val: leftVal
            }
            node.left = leftNode
            queue.push(leftNode)
        }

        const rightVal = nodes.shift()
        if (rightVal !== null) {
            const rightNode = {
                val: rightVal
            }
            node.right = rightNode
            queue.push(rightNode)
        }
    }
    return root
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}