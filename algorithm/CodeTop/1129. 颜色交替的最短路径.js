// 1129. 颜色交替的最短路径
// https://leetcode.cn/problems/shortest-path-with-alternating-colors/
// bfs 把这个图想象成树的层次遍历
function shortestAlternatingPaths(n, redEdges, blueEdges) {
    const redAdjList = Array.from({ length: n }, () => [])
    const blueAdjList = Array.from({ length: n }, () => [])
    for (let [from, to] of redEdges) {
        redAdjList[from].push(to)
    }
    for (let [from, to] of blueEdges) {
        blueAdjList[from].push(to)
    }
    const adjList = [
        redAdjList,
        blueAdjList,
    ]
    const res = new Array(n).fill(-1)
    const queue = [
        [0, 0, 0],
        [0, 0, 1],
    ];
    const visited = Array.from({ length: n }, () => []); // 初始0节点到0节点，经过长度0路径，最后一个边颜色为蓝色，题目要求红蓝相间，即红边或者蓝边开始
    while (queue.length > 0) {
        const [cur, distance, color] = queue.shift()
        res[cur] = res[cur] === -1 ? distance : Math.min(distance, res[cur])
        for (let to of adjList[color][cur]) {
            if (visited[to][color]) continue; // 一条边只走一次
            visited[to][color] = true
            queue.push([to, distance + 1, color ^ 1])
        }
    }
    return res
}

console.log(shortestAlternatingPaths(3, [[0, 1], [1, 2]], []))