/**
    题目：
    请实现两个函数，分别用来序列化和反序列化二叉树。
 */

// time: 
// space: 
// 前序、后序、层级可以，中序不可以
// 因为中序无法确定根节点位置
// 前序单独可以是因为序列化时把空节点信息带上了

// 层级
function serialize(root) {
    if (!root) return ''
    const queue = [root], nodes = []
    while (queue.length > 0) {
        const node = queue.shift();
        if (node) {
            nodes.push(node.val)
            queue.push(node.left)
            queue.push(node.right)
        } else {
            nodes.push('#')
        }
    }
    return nodes.join(',')
}
function deserialize(str) {
    if (!str) return null
    const nodes = str.split(',')
    let i = 0;
    const root = {
        val: nodes[i++],
        left: null,
        right: null
    }
    const queue = [root]
    while (queue.length > 0) {
        const node = queue.shift();

        const left = nodes[i++];
        if (left !== '#') {
            node.left = {
                val: left,
                left: null,
                right: null
            };
            queue.push(node.left)
        }

        const right = nodes[i++];
        if (right !== '#') {
            node.right = {
                val: right,
                left: null,
                right: null
            };
            queue.push(node.right)
        }
    }
    return root
}


// 后序
function serialize(root) {
    const res = []
    function recur(root) {
        if (!root) {
            res.push('#')
            return
        }
        recur(root.left)
        recur(root.right)
        res.push(root.val)
    }
    recur(root)
    return res.join(',')
}
function deserialize(str) {
    const res = str.split(',')
    function recur() {
        if (res.length === 0) {
            return null
        }
        const val = res.pop()
        if (val === '#') return null
        const root = {
            val,
            left: null,
            right: null
        }

        // 注意后序反序列化时，要先递归右子树，后递归左子树。
        // 同时反序列化时其实用的是前序遍历
        root.right = recur()
        root.left = recur()
        return root
    }
    return recur()
}

// 前序
function serialize(root) {
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
}
function deserialize(str) {
    const res = str.split(',')
    function recur() {
        if (res.length === 0) {
            return null
        }
        const val = res.shift()
        if (val === '#') return null
        const root = {
            val,
            left: null,
            right: null
        }
        root.left = recur()
        root.right = recur()
        return root
    }
    return recur()
}