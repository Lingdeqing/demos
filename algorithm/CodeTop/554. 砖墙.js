// 554. 砖墙
// https://leetcode.cn/problems/brick-wall/
function leastBricks(wall) {
    const map = new Map()
    for (let i = 0; i < wall.length; i++) {
        let x = 0
        for (let j = 0; j < wall[i].length - 1; j++) {
            x += wall[i][j]
            map.set(x, (map.get(x) || 0) + 1) // 统计砖块右侧坐标的行数
        }
    }
    const rows = [...map.values()]
    return rows.length > 0 ? wall.length - Math.max(...rows) : wall.length
}
console.log(leastBricks([[1, 2, 2, 1], [3, 1, 2], [1, 3, 2], [2, 4], [3, 1, 2], [1, 3, 1, 1]]))