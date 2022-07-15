// 1252. 奇数值单元格的数目
// https://leetcode.cn/problems/cells-with-odd-values-in-a-matrix/


function oddCells(m, n, indices) {
    const cells = Array.from({ length: m }, () => new Array(n).fill(0))
    indices.forEach(([r, c]) => {
        for (let i = 0; i < n; i++) {
            cells[r][i]++;
        }
        for (let i = 0; i < m; i++) {
            cells[i][c]++;
        }
    })
    let res = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (cells[i][j] % 2 !== 0) {
                res++
            }
        }
    }
    return res
}

// https://leetcode.cn/problems/cells-with-odd-values-in-a-matrix/solution/qi-shu-zhi-dan-yuan-ge-de-shu-mu-by-leet-oa4o/
function oddCells(m, n, indices) {
    let rows = new Array(m).fill(0), cols = new Array(n).fill(0)
    indices.forEach(([r, c]) => {
        rows[r]++
        cols[c]++
    })
    const oddRow = rows.filter(r => r % 2 === 1)
    const oddCol = cols.filter(r => r % 2 === 1)
    return oddRow * (n - oddCol) + oddCol * (m - oddRow)
}

console.log(oddCells(2,
    3,
    [[0, 1], [1, 1]]))