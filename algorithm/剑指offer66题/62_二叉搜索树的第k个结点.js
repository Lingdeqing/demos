/**
    题目：
    给定一颗二叉搜索树，请找出其中的第k大的结点。例如， 5 / \ 3 7 /\ /\ 2 4 6 8 中，按结点数值大小顺序第三个结点的值为4。
 */

// time: 
// space:
function kthLargest(root, k) {
    let result
    function recur(root) {
        if (!root) return
        recur(root.right) // 因为这个二叉搜索树是左子树<根<右子树，所以 右、根、左 的中序遍历就是从大到小的顺序
        k--;
        if (k === 0) {
            result = root.val
            return
        }
        recur(root.left)
    }
    recur(root)
    return result
};