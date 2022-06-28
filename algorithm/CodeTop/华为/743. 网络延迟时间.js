// 743. 网络延迟时间
// https://leetcode.cn/problems/network-delay-time/

// function networkDelayTime(times, n, k) {
//     // 构建邻接表
//     const adjList = Array.from({ length: n + 1 }, () => [])
//     for (let [from, to, time] of times) {
//         adjList[from].push([to, time])
//     }

//     // dfs 返回最小时间
//     let visited = {}, onPath = {}, count = 0
//     function dfs(i) {
//         if (visited[i] || onPath[i]) {
//             return 0
//         }
//         visited[i] = true
//         count++
//         onPath[i] = true
//         let res = Infinity
//         for (let edge of adjList[i]) {
//             res = Math.min(res, dfs(edge[0]) + edge[1])
//         }
//         onPath[i] = false
//         return res
//     }
//     const minTime = dfs(k)
//     return count < n - 1 ? -1 : minTime
// }

// 考的是：单源最短路径算法 Dijkstra
// console.log(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2))


function networkDelayTime(times, n, k) {
    const adjList = Array.from({ length: n }, () => [])
    for (let [from, to, weight] of times) {
        adjList[from - 1].push([to - 1, weight])
    }

    const distTo = dijkstra(k - 1, adjList)
    const res = Math.max(...distTo)
    return isFinite(res) ? res : -1
}

function State(id, distFromStart) {
    this.id = id
    this.distFromStart = distFromStart
}
// labuladong的超时啦
function dijkstra(start, graph) {
    const distTo = new Array(graph.length).fill(Infinity)
    distTo[start] = 0
    const pq = [new State(start, 0)]
    while (pq.length > 0) {
        const node = pq.shift()
        const { id, distFromStart } = node;

        if (distFromStart > distTo[id]) continue;

        for (let neighbor of graph[id]) {
            const distToNext = distTo[id] + neighbor[1]
            const nextId = neighbor[0]

            if (distToNext > distTo[nextId]) continue

            distTo[nextId] = distToNext
            pq.push(new State(nextId, distToNext))
        }
    }
    return distTo
}


console.log(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2))
// [1, 0, 1], [1, 2, 1], [2, 3, 1]
// 1