// 834. 树中距离之和
// https://leetcode.cn/problems/sum-of-distances-in-tree/

// 参考：https://leetcode.cn/problems/sum-of-distances-in-tree/solution/shou-hua-tu-jie-shu-zhong-ju-chi-zhi-he-shu-xing-d/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function (n, edges) {
    const graph = Array.from({ length: n }, () => new Array())
    for (let [from, to] of edges) {
        graph[from].push(to)
        graph[to].push(from)
    }
    const distSum = new Array(n).fill(0) //distSum[i] 代表节点i到其所在子树的节点的距离之和，后面更新为：节点i到所有节点的距离之和
    const nodeNum = new Array(n).fill(1) //nodeNum[i] 代表节点i所在子树节点个数，至少为1
    const postOrder = (root, parent) => {
        const neighbors = graph[root]
        for (let neighbor of neighbors) {
            if (neighbor === parent) continue
            postOrder(neighbor, root)
            nodeNum[root] += nodeNum[neighbor]
            distSum[root] += nodeNum[neighbor] + distSum[neighbor]
        }
    }
    const preOrder = (root, parent) => {
        const neighbors = graph[root]
        for (let neighbor of neighbors) {
            if (neighbor === parent) continue
            distSum[neighbor] = distSum[root] - nodeNum[neighbor] + n - nodeNum[neighbor]
            preOrder(neighbor, root)
        }
    }
    postOrder(0, -1)
    preOrder(0, -1)
    return distSum
};

sumOfDistancesInTree(6, [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]])