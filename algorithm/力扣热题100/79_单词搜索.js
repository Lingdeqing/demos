/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    if (board.length === 0 || !word) return false
    const visited = new Map()
    function bt(i, j, k) {
        if (k >= word.length) return true
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return false
        if (board[i][j] !== word[k]) return false

        const key = i + ',' + j
        if (visited.get(key)) return false
        visited.set(key, true)

        const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
        for (let m = 0; m < 4; m++) {
            if (bt(i + dirs[m][0], j + dirs[m][1], k + 1)) {
                return true
            }
        }

        visited.set(key, false)
        return false
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (bt(i, j, 0)) {
                return true
            }
        }
    }
    return false
}

console.log(exist([
    ["a", "a", "a"],
    ["A", "A", "A"],
    ["a", "a", "a"]]
    , "aAaaaAaaA"))