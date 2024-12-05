/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    if (board.length === 0) return false

    const visited = new Map()
    function bt(start, i, j) {
        if (i < 0 || i >= board.length) return false
        if (j < 0 || j >= board[0].length) return false

        if (word[start] !== board[i][j]) {
            return false
        }
        if (start === word.length - 1) return true

        const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
        for (let m = 0; m < dirs.length; m++) {
            const nextI = i + dirs[m][0];
            const nextJ = j + dirs[m][1];
            const key = nextI + ',' + nextJ
            if (visited.get(key)) continue
            visited.set(key, true)
            if (bt(start + 1, nextI, nextJ)) {
                return true
            }
            visited.set(key, false)
        }

        return false
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const key = i + ',' + j
            visited.set(key, true)
            if (bt(0, i, j)) {
                return true
            }
            visited.set(key, false)
        }
    }
    return false
};

console.log(exist([
    ["a", "a", "a"],
    ["A", "A", "A"],
    ["a", "a", "a"]]
    , "aAaaaAaaA"))