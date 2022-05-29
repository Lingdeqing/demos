// https://www.nowcoder.com/practice/2f8c17bec47e416897ce4b9aa560b7f4


function mock(cmds) {
    let res = [0, 0, 0, 0, 0]
    // 初始化
    let [row, col] = cmds[0]
    if (row > 9 || col > 9) {
        res[0] = -1
    }
    row = Math.min(row, 9)
    col = Math.min(col, 9)

    //交换
    const [x1, y1, x2, y2] = cmds[1]
    if (x1 < 0 || x1 >= row || x2 < 0 || x2 >= row || y1 < 0 || y1 >= col || y2 < 0 || y2 >= col) {
        res[1] = -1
    }

    // 插入行
    const insertRow = cmds[2][0]
    if (row === 9 || insertRow < 0 || insertRow >= row) {
        res[2] = -1
    }

    // 插入列
    const insertCol = cmds[3][0]
    if (col === 9 || insertCol < 0 || insertCol >= col) {
        res[3] = -1
    }

    // 查询
    const [qx, qy] = cmds[4]
    if (qx < 0 || qy < 0 || qx >= row || qy >= col) {
        res[4] = -1
    }

    return res
}