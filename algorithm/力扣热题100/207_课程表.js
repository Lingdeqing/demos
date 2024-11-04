var canFinish = function (numCourses, prerequisites) {
    // 邻接表
    const adjList = Array.from({ length: numCourses }, () => [])
    for (let edge of prerequisites) {
        adjList[edge[0]].push(edge[1])
    }

    const onPath = new Array(numCourses).fill(false)
    const visited = new Array(numCourses).fill(false)
    let hasCycle = false

    function dfs(graph, i) {
        if (onPath[i]) {
            hasCycle = true
            return;
        }
        if (hasCycle || visited[i]) {
            return
        }

        visited[i] = true
        onPath[i] = true
        for (let next of graph[i]) {
            dfs(graph, next)
        }
        onPath[i] = false
    }

    for (let i = 0; i < adjList.length; i++) {
        dfs(adjList, i)
    }

    return !hasCycle
};

