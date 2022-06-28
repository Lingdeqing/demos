// 207. 课程表
// https://leetcode.cn/problems/course-schedule/

function canFinish(numCourses, prerequisites) {
    const adjList = Array.from({ length: numCourses }, () => [])
    prerequisites.forEach(([to, from]) => {
        adjList[from].push(to)
    })


    const visited = {}, path = {}
    for (let i = 0; i < adjList.length; i++) {
        if (dfs(visited, path, i)) {
            return false
        }
    }
    // 返回是否有环
    function dfs(visited, path, i) {
        if (path[i]) return true

        if (visited[i] || path[i]) {
            return path[i] || false
        }
        visited[i] = true
        path[i] = true
        for (let j of adjList[i]) {
            if (dfs(visited, path, j)) {
                return true
            }
        }
        path[i] = false
        return false
    }
    return true
}


console.log(canFinish(5, [[1, 4], [2, 4], [3, 1], [3, 2]]))

function canFinish(numCourses, prerequisites) {
    const adjList = Array.from({ length: numCourses }, () => [])
    for (let i = 0; i < prerequisites.length; i++) {
        const [from, to] = prerequisites[i]
        adjList[to].push(from)
    }

    let visited = {}, onPath = {}, hasCycle = false
    function dfs(i) {
        if (onPath[i]) {
            hasCycle = true
        }
        if (visited[i] || hasCycle) {
            return
        }

        visited[i] = true;
        onPath[i] = true
        for (let j of adjList[i]) {
            dfs(j)
        }
        onPath[i] = false
    }
    for (let i = 0; i < numCourses; i++) {
        dfs(i)
    }
    return !hasCycle
}