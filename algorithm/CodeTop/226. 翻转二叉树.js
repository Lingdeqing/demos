// 226. 翻转二叉树
// https://leetcode.cn/problems/invert-binary-tree/


// 分解问题
function invertTree(root) {
    if (!root) return root

    const right = invertTree(root.left)
    const left = invertTree(root.right)
    root.right = right;
    root.left = left;
    return root;
}

// 遍历节点
function invertTree2(root) {
    if (!root) return root;

    ;[root.left, root.right] = [root.right, root.left];
    invertTree(root.left)
    invertTree(root.right)
    return root;
}

// 迭代
function invertTree3(root) {
    if (!root) return root;

    const queue = [root]
    while (queue.length > 0) {
        const node = queue.shift();
        ;[node.left, node.right] = [node.right, node.left];
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
    return root;
}