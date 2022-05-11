/**
    题目：
    请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子。 例如 a b c e s f c s a d e e 矩阵中包含一条字符串"bcced"的路径，但是矩阵中不包含"abcb"路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入该格子。
    
 */

// time: 
// space:
function exist(board, word) {
    if (!word) return false
    let visited = new Set()

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (walk(i, j, 0)) {
                return true
            }
        }
    }


    function walk(i, j, k) {
        const visitedKey = `${i}-${j}`
        if (visited.has(visitedKey)) return false
        visited.add(visitedKey);
        if (word[k] === board[i][j]) {
            if (k + 1 >= word.length) {
                visited.delete(visitedKey);
                return true
            }
            let complete = false
            if (j + 1 < board[i].length) {
                complete = walk(i, j + 1, k + 1)
            }
            if (!complete && j - 1 >= 0) {
                complete = walk(i, j - 1, k + 1)
            }
            if (!complete && i + 1 < board.length) {
                complete = walk(i + 1, j, k + 1)
            }
            if (!complete && i - 1 >= 0) {
                complete = walk(i - 1, j, k + 1)
            }
            visited.delete(visitedKey);
            return complete
        }
        visited.delete(visitedKey);
        return false
    }

    return false
}

// 抄一下k神
function exist(board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (dfs(i, j, 0)) {
                return true
            }
        }
    }

    function dfs(i, j, k) {
        if (i < 0 || j < 0 || i >= board.length || j >= board[i].length || word[k] !== board[i][j]) return false
        if (k === word.length - 1) return true
        board[i][j] = ''
        const res = dfs(i, j + 1, k + 1) || dfs(i, j - 1, k + 1) || dfs(i + 1, j, k + 1) || dfs(i - 1, j, k + 1)
        board[i][j] = word[k]
        return res
    }

    return false
}