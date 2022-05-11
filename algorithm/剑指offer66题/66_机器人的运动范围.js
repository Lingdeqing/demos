/**
    题目：
    地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于k的格子。 例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7 = 18。但是，它不能进入方格（35,38），因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？
    
 */

// time: 
// space:
// dfs
function movingCount(m, n, k) {
    if (m <= 0 || n <= 0) return 0
    const set = new Set()
    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= m || j >= n || sumBit(i, j) > k) return
        if (set.has(i + '-' + j)) return
        set.add(i + '-' + j)
        dfs(i, j + 1)
        // dfs(i, j - 1)
        dfs(i + 1, j)
        // dfs(i - 1, j)
    }
    function sumBit(i, j) {
        let sum = 0
        while (i) {
            sum += i % 10
            i = ~~(i / 10)
        }
        while (j) {
            sum += j % 10
            j = ~~(j / 10)
        }
        return sum
    }
    dfs(0, 0)
    return set.size
}

// bfs
function movingCount(m, n, k) {
    if (m <= 0 || n <= 0) return 0
    const queue = [[0, 0]]
    const set = new Set()
    while (queue.length > 0) {
        const [i, j] = queue.shift()
        if (set.has(i + '-' + j)) continue
        if (sumBit(i, j) <= k) {
            set.add(i + '-' + j)
            if (i + 1 < m) queue.push([i + 1, j])
            if (j + 1 < n) queue.push([i, j + 1])
        }
    }
    function sumBit(i, j) {
        let sum = 0
        while (i) {
            sum += i % 10
            i = ~~(i / 10)
        }
        while (j) {
            sum += j % 10
            j = ~~(j / 10)
        }
        return sum
    }
    return set.size
}

