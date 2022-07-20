// 749. 隔离病毒
// https://leetcode.cn/problems/contain-virus/

function containVirus(isInfected) {
    let res = 0
    while (true) {
        const wall = mock(isInfected)
        if (wall === 0) break;
        res += wall
    }
    return res
}
function mock(isInfected) {
    let visited = {}, maxInfected = 0, res = 0, s1List = [], s2List = []
    for (let i = 0; i < isInfected.length; i++) {
        for (let j = 0; j < isInfected[i].length; j++) {
            if (isInfected[i][j] === 1 && !visited[i + ',' + j]) {
                const [s1, s2, wall] = bfs(isInfected, i, j, visited)
                s1List.push(s1)
                s2List.push(s2)
                if (s2.size > maxInfected) {
                    maxInfected = s2.size
                    res = wall
                }
            }
        }
    }
    for (let i in s2List) {
        const s2 = s2List[i], s1 = s1List[i]
        if (s2.size === maxInfected) {
            // 最大感染的砌墙，改为-1
            for (let [i, j] of s1.values()) {
                isInfected[i][j] = -1
            }
        } else {
            // 其他的感染
            for (let [i, j] of s2.values()) {
                isInfected[i][j] = 1
            }
        }

    }
    return res
}
function bfs(isInfected, i, j, visited) {
    let wall = 0
    const queue = [[i, j]]
    visited[i + ',' + j] = true
    const s1 = new Map(), s2 = new Map()
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    while (queue.length > 0) {
        [i, j] = queue.shift()
        s1.set(i + ',' + j, [i, j])
        for (let dir of dirs) {
            let m = i + dir[0], n = j + dir[1]
            let k = m + ',' + n
            if (m < 0 || n < 0 || m >= isInfected.length || n >= isInfected[m].length || visited[k]) continue
            if (isInfected[m][n] === 1) {
                visited[k] = true
                queue.push([m, n])
            } else if (isInfected[m][n] === 0) {
                s2.set(k, [m, n])
                wall++
            }
        }
    }
    return [s1, s2, wall]
}

console.log(containVirus([[0, 1, 0, 0, 0, 0, 0, 1], [0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0]]))