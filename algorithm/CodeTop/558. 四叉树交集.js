// 558. 四叉树交集
// https://leetcode.cn/problems/logical-or-of-two-binary-grids-represented-as-quad-trees/

function intersect(quadTree1, quadTree2) {
    if (quadTree1.isLeaf) {
        return quadTree1.val ? quadTree1 : quadTree2
    }
    if (quadTree2.isLeaf) {
        return quadTree2.val ? quadTree2 : quadTree1
    }
    const topLeft = intersect(quadTree1.topLeft, quadTree2.topLeft)
    const topRight = intersect(quadTree1.topRight, quadTree2.topRight)
    const bottomLeft = intersect(quadTree1.bottomLeft, quadTree2.bottomLeft)
    const bottomRight = intersect(quadTree1.bottomRight, quadTree2.bottomRight)
    if (topLeft.isLeaf && topRight.isLeaf && bottomLeft.isLeaf && bottomRight.isLeaf &&
        topLeft.val === topRight.val && topLeft.val === bottomLeft.val && topLeft.val === bottomRight.val) {
        return new Node(topLeft.val, true)
    }
    return new Node(topLeft.val, false, topLeft, topRight, bottomLeft, bottomRight)
}