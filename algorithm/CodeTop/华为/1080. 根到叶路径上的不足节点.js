// 1080. 根到叶路径上的不足节点
// https://leetcode.cn/problems/insufficient-nodes-in-root-to-leaf-paths/



function sufficientSubset(root, limit) {
    function dfs(sum, root) {
        sum += root.val
        if (!root.left && !root.right) {
            // 叶子节点
            return sum < limit
        }
        if (root.left && root.right) {
            const leftRemoved = dfs(sum, root.left)
            const rightRemoved = dfs(sum, root.right)
            if (leftRemoved) {
                root.left = null
            }
            if (rightRemoved) {
                root.right = null
            }
            return leftRemoved && rightRemoved
        }
        if (root.left) {
            const leftRemoved = dfs(sum, root.left)
            if (leftRemoved) {
                root.left = null
            }
            return leftRemoved
        }
        if (root.right) {
            const rightRemoved = dfs(sum, root.right)
            if (rightRemoved) {
                root.right = null
            }
            return rightRemoved
        }
    }
    const res = {
        val: 0,
        left: root
    }
    dfs(0, res)
    return res.left;
}

// 删除节点一般递归时返回节点的形式写比较方便
function sufficientSubset(root, limit) {
    function dfs(sum, root) {
        if (!root) return null
        sum += root.val
        if (!root.left && !root.right) {
            // 叶子节点
            return sum < limit ? null : root
        }
        root.left = dfs(sum, root.left)
        root.right = dfs(sum, root.right)
        return root.left || root.right ? root : null
    }
    return dfs(0, root)
}
// 不知道为啥不对😄
// function sufficientSubset(root, limit) {
//     function dfs(sum, root, parent, prop) {
//         if (!root) return sum
//         const leftVal = dfs(sum + root.val, root.left, root, 'left')
//         const rightVal = dfs(sum + root.val, root.right, root, 'right')
//         if (root.left && root.right) {
//             if (leftVal < limit && rightVal < limit) {
//                 parent[prop] = null
//             }
//         } else if (root.left) {
//             if (leftVal < limit) {
//                 parent[prop] = null
//             }
//         } else if (root.right) {
//             if (rightVal < limit) {
//                 parent[prop] = null
//             }
//         } else {
//             if (sum < limit) {
//                 parent[prop] = null
//             }
//         }
//         return Math.max(leftVal, rightVal)
//     }
//     const res = {
//         val: 0,
//         left: root
//     }
//     dfs(0, root, res, 'left')
//     return res.left;
// }

console.log(sufficientSubset(deserializeArray([1, 2, -3, -5, null, 4, null]),
    -1))


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