/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {

    // 邻接表
    const adjList = new Map();
    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i]
        if (!adjList.has(a)) adjList.set(a, [])
        adjList.get(a).push({ node: b, weight: values[i] })

        if (!adjList.has(b)) adjList.set(b, [])
        adjList.get(b).push({ node: a, weight: 1 / values[i] })
    }

    // 广度遍历
    function bfs(adjList, start, end) {
        if (!adjList.has(start) || !adjList.has(end)) return -1
        if (start === end) return 1

        const queue = [start]
        const productList = new Map()
        const visited = new Set()
        visited.add(start)

        while (queue.length > 0) {
            const cur = queue.shift();

            for (let child of adjList.get(cur)) {
                if (visited.has(child.node)) continue
                visited.add(child.node)

                productList.set(child.node, (productList.get(cur) || 1) * child.weight)
                if (child.node === end) {
                    return productList.get(child.node)
                }

                queue.push(child.node)
            }
        }
        return -1
    }

    const res = []
    for (let [a, b] of queries) {
        res.push(bfs(adjList, a, b))
    }
    return res

};

console.log(calcEquation([["a", "b"], ["b", "c"]],
    [2.0, 3.0],
    [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]
))


// dfs
var calcEquation = function (equations, values, queries) {
    const adjList = new Map()
    for (let [i, [a, b]] of equations.entries()) {
        if (!adjList.has(a)) adjList.set(a, [])
        adjList.get(a).push({
            name: b,
            val: values[i]
        })
        if (!adjList.has(b)) adjList.set(b, [])
        adjList.get(b).push({
            name: a,
            val: 1 / values[i]
        })
    }

    function dfs(a, b, visited) {
        if (!adjList.has(a) || !adjList.has(b)) return -1
        if (a === b) return 1

        if (visited[a]) return -1
        visited[a] = true

        for (let { name, val } of adjList.get(a)) {

            const subRes = dfs(name, b, visited)
            if (subRes !== -1) {
                return val * subRes
            }
        }

        return -1;
    }

    const res = []
    for (let [a, b] of queries) {
        res.push(dfs(a, b, {}))
    }
    return res
}
