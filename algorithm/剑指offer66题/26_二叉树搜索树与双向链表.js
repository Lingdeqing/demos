/**
    题目：
        输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。
 */
// time:
// space:
// 后序遍历
function BST2List(root) {
    if (!root) return null

    let prevHead, prevTail, nextHead, nextTail;

    if (root.left) {
        const prev = BST2List(root.left);
        prevHead = prev // 左头
        prevTail = prev.left // 左尾
    }

    if (root.right) {
        const next = BST2List(root.right);
        nextHead = next; // 右头
        nextTail = next.left; // 右尾
    }

    if (root.left && root.right) {// 左右都有
        // 左头
        prevHead.left = nextTail
        // 左尾
        prevTail.right = root
        // 右头
        nextHead.left = root
        // 右尾
        nextTail.right = prevHead
        // 当前节点
        root.left = prevTail
        root.right = nextHead

        return prevHead
    } else if (root.left) { // 仅左
        // 左头
        prevHead.left = root
        // 左尾
        prevTail.right = root
        // 当前节点
        root.left = prevTail
        root.right = prevHead

        return prevHead
    } else if (root.right) { // 仅右
        // 右头
        nextHead.left = root
        // 右尾
        nextTail.right = root
        // 当前节点
        root.left = nextTail
        root.right = nextHead

        return root
    } else { // 仅根
        // 当前节点
        root.left = root
        root.right = root
        return root
    }
}


// 中序遍历
function BST2List(root) {
    if (!root) return null

    let prev = null, head = null
    function recur(root) {
        if (!root) return
        recur(root.left)
        // 中序
        if (prev) {
            prev.right = root
            root.left = prev
        } else {
            head = root
        }
        prev = root
        recur(root.right)
    }
    recur(root)

    head.left = prev
    prev.right = head;
    return head;
}