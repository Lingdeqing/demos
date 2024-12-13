/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const res = []
    function bt(validStr, left, right) {
        if (left < 0 || right < 0 || left > right) return

        if (left === 0 && right === 0) {
            res.push(validStr)
            return
        }

        bt(validStr + '(', left - 1, right)
        bt(validStr + ')', left, right - 1)
    }
    bt('', n, n)
    return res
}