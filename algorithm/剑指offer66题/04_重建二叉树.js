/**
    题目：
        输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
        假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
        例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
 */

function buildTree(preorder, inorder) {
    const valToIndex = new Map()
    for (let i = 0; i < postorder.length; i++) {
        valToIndex.set(inorder[i], i)
    }
    return _buildTree(valToIndex, preorder, inorder, 0, preorder.length - 1, 0, inorder.length - 1)
}
function _buildTree(valToIndex, preorder, inorder, preStart, preEnd, inStart, inEnd) {
    if (preStart > preEnd) return null
    const rootVal = preorder[preStart]
    let rootIndex = valToIndex.get(rootVal)
    const leftSize = rootIndex - inStart
    return {
        val: root,
        left: _buildTree(valToIndex, preorder, inorder, preStart + 1, preStart + leftSize, inStart, rootIndex - 1),
        right: _buildTree(valToIndex, preorder, inorder, preStart + leftSize + 1, preEnd, rootIndex + 1, inEnd)
    }
}




// lc654. 最大二叉树
function buildTree(arr) {
    return _buildTree(arr, 0, arr.length - 1)
}
function _buildTree(arr, start, end) {
    if (start > end) return null
    let max = -Infinity, maxIndex = -1
    for (let i = start; i <= end; i++) {
        if (arr[i] > max) {
            max = arr[i]
            maxIndex = i
        }
    }
    return {
        val: max,
        left: _buildTree(arr, start, maxIndex - 1),
        right: _buildTree(arr, maxIndex + 1, end)
    }
}


// lc106. 从中序与后序遍历序列构造二叉树
function buildTree(inorder, postorder) {
    return _buildTree(inorder, postorder, 0, preorder.length - 1, 0, inorder.length - 1)
}
function _buildTree(inorder, postorder, inStart, inEnd, postStart, postEnd) {
    if (postStart > postEnd) return null
    const root = postorder[postEnd]
    let rootIndex = -1
    for (let i = inStart; i <= inEnd; i++) {
        if (inorder[i] === root) {
            rootIndex = i
            break
        }
    }
    const leftSize = rootIndex - inStart
    return {
        val: root,
        left: _buildTree(inorder, postorder, inStart, rootIndex - 1, postStart, postStart + leftSize - 1),
        right: _buildTree(inorder, postorder, rootIndex + 1, inEnd, postStart + leftSize, postEnd - 1)
    }
}

// lc889. 根据前序和后序遍历构造二叉树
function buildTree(preorder, postorder) {
    const valToIndex = new Map()
    for (let i = 0; i < postorder.length; i++) {
        valToIndex.set(postorder[i], i)
    }
    return _buildTree(valToIndex, preorder, postorder, 0, preorder.length - 1, 0, postorder.length - 1)
}
function _buildTree(valToIndex, preorder, postorder, preStart, preEnd, postStart, postEnd) {
    if (preStart > preEnd) return null
    if (preStart === preEnd) return {
        val: preorder[preStart]
    }
    const rootVal = preorder[preStart]
    const leftRootVal = preorder[preStart + 1]
    const leftRootIndex = valToIndex.get(leftRootVal)
    const leftSize = leftRootIndex - postStart + 1
    return {
        val: rootVal,
        left: _buildTree(valToIndex, preorder, postorder, preStart + 1, preStart + leftSize, postStart, leftRootIndex),
        right: _buildTree(valToIndex, preorder, postorder, preStart + 1 + leftSize, preEnd, leftRootIndex + 1, postEnd - 1)
    }
}