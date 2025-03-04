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
var diameterOfBinaryTree = function (root) {


    let res = 0
    // 计算树的高度
    function dfs(root) {
        if (!root) return 0
        const left = dfs(root.left)
        const right = dfs(root.right)
        res = Math.max(res, left + right)
        return Math.max(left, right) + 1
    }
    dfs(root)
    return res
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {

    let d = 0, resPath = null
    function dfs1(root, path) {
        if (!root) return 0
        const leftPath = []
        const rightPath = []
        const left = dfs1(root.left, leftPath)
        const right = dfs1(root.right, rightPath)
        const res = Math.max(left, right) + 1

        path.length = 0
        path.push(root.val)
        if (left > right) {
            path.push(...leftPath)
        } else {
            path.push(...rightPath)
        }

        const curRes = Math.max(d, left + right)
        if (curRes > d) {
            d = curRes
            resPath = [...leftPath.reverse(), root.val, ...rightPath]
        }

        return res
    }

    dfs1(root, [])
    console.log(resPath)
    return d
}

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
console.log(diameterOfBinaryTree(deserializeArray([1, 2, 3, 4, 5])))