/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    // 邻接表
    const adjList = Array.from({ length: numCourses }, () => [])
    for (let [from, to] of prerequisites) {
        adjList[from].push(to)
    }

    // 检查图中是否存在环
    const onPath = new Set()
    const visited = new Set()
    function dfs(i) {
        if (onPath.has(i)) return true // 先判定是否形成环，因为visited和onPath是同时设置的

        if (visited.has(i)) return false // 访问过，那么必然从i往后走没有环，有环的话整个递归就结束了

        visited.add(i)
        onPath.add(i)

        for (let child of adjList[i]) {
            if (dfs(child)) return true
        }

        onPath.delete(i)

        return false
    }
    for (let i = 0; i < numCourses; i++) {
        if (dfs(i)) return false
    }
    return true
}