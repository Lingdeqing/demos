/**
    题目：
        输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
 */
// time:
// space:
function isBST(arr) {
    return _isBST(arr, 0, arr.length - 1)
}
function _isBST(arr, left, right) {
    if (left >= right) return true
    const root = arr[right]
    // 左子树
    let rightStart = left
    while (arr[rightStart] < root) {
        rightStart++
    }
    // 判断右子树是否都大于根节点
    for (let i = rightStart; i <= right; i++) {
        if (arr[i] < root) {
            return false
        }
    }
    return _isBST(arr, left, rightStart - 1) && _isBST(arr, rightStart, right - 1)
}