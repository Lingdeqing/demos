// 994. 腐烂的橘子
// https://leetcode.cn/problems/rotting-oranges/

// bfs
// 求最短路径用BFS：https://leetcode.cn/problems/rotting-oranges/solution/li-qing-si-lu-wei-shi-yao-yong-bfsyi-ji-ru-he-xie-/
// 返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。翻译一下，实际上就是求腐烂橘子到所有新鲜橘子的最短路径
function orangesRotting(grid) {
    let queue = [], good = 0, visited = {}, res = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 2) {
                visited[i + ',' + j] = true
                queue.push([i, j])
            } else if (grid[i][j] === 1) {
                good++;
            }
        }
    }

    // 从烂橘子开始扩散
    const dx = [0, 0, -1, 1], dy = [-1, 1, 0, 0]
    while (queue.length > 0) {
        const temp = []
        for (let [i, j] of queue) {
            for (let k = 0; k < 4; k++) {
                const x = i + dx[k], y = j + dy[k]
                if (x < 0 || x >= grid.length || y < 0 || y >= grid[x].length) continue;
                if (visited[x + ',' + y]) continue;
                visited[x + ',' + y] = true;
                if (grid[x][y] === 1) {
                    grid[x][y] = 2
                    good--
                    temp.push([x, y])
                }
            }
        }
        if (temp.length > 0) {// 有被烂到
            res++
        }
        queue = temp
    }
    return good > 0 ? -1 : res
}

console.log(orangesRotting([[0, 1]]))