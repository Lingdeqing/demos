// 17. 电话号码的字母组合

// 回溯模版
// function backtrack(path, chooseList){
//     // 满足结束条件
//     if(chooseList.length===0){
//         // 加入结果集中
//         res.push(path.join(','))
//         return
//     }
//     chooseList.forEach((current) => {
//         // 选择一项
//         path.push(current)
//         // 递归后序选择
//         backtrack(path, chooseList.filter(item=>current!==item))
//         // 撤销选择
//         path.pop()
//     })
// }
// 回溯模版 - 解法
function letterCombinations(digits) {
    if (!digits) return []
    const map = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    }
    const path = [], res = []
    function backtrack(index) {
        if (index === digits.length) {
            // 结束
            res.push(path.join(','))
            return
        }
        const chooseList = map[digits[index]]
        for (let item of chooseList) {
            // 选择
            path.push(item)
            // 递归
            backtrack(index + 1)
            // 撤销选择
            path.pop()
        }
    }
    backtrack(0)
    return res
}


// 回溯模版 - N皇后
function nQueue(n) {
    const res = []
    function backtrack(board, row) {
        if (row === n) {
            res.push(board.map(row => row.join('')))
            return
        }
        // 做选择
        for (let col = 0; col < n; col++) {
            if (!isValid(board, row, col)) continue
            // 做选择
            board[row][col] = 'Q'
            // 递归
            backtrack(board, row + 1)
            // 撤销选择
            board[row][col] = '.'
        }
    }
    function isValid(board, row, col) {
        // 检查上方是否有冲突
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') {
                return false
            }
        }
        // 检查左上是否有冲突
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') {
                return false
            }
        }
        // 检查右上是否有冲突
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') {
                return false
            }
        }
        return true
    }
    const board = []
    for (let i = 0; i < n; i++) {
        board.push(new Array(n).fill('.'))
    }
    backtrack(board, 0)
    return res
}




// 直接递归
function letterCombinations(digits) {
    if (!digits) return ''
    const map = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    }
    function recur(start) {
        if (start >= digits.length) return ['']
        const res = []
        const digit = digits[start]
        const sub = recur(start + 1)
        sub.forEach(sub => {
            map[digit].forEach(ch => {
                res.push(ch + sub)
            })
        })
        return res
    }
    return recur(0)
}