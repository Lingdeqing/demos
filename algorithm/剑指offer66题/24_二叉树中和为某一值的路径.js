/**
    题目：
        输入一颗二叉树和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
 */
// time:
// space:
// function sumPath(tree, target) {
//     const paths = []
//     function getPath(node, path, sum) {
//         if (node) {
//             sum += node.val;
//             path = [...path, node.val]
//             // 叶子了
//             if (!node.left && !node.right && sum === target) {
//                 paths.push(path)
//             }
//             getPath(node.left, path, sum)
//             getPath(node.right, path, sum)
//         }
//     }
//     getPath(tree, [], 0)
//     return paths
// }


function sumPath(tree, target) {
    const paths = [], path = []
    function recur(node, sum) {
        if (node) {
            sum += node.val;
            path.push(node.val) // 复用路径数组
            // 叶子了
            if (!node.left && !node.right && sum === target) {
                paths.push([...path])
            }
            recur(node.left, sum)
            recur(node.right, sum)
            path.pop() // 离开节点，弹出节点
        }
    }
    recur(tree, 0)
    return paths
}