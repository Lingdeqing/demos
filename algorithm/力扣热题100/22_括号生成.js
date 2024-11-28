/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const res = []
    function bt(i, str, left, right) {
        if (left === n && right === n) {
            res.push(str)
            return
        }
        if (left < n) {
            bt(i + 1, str + '(', left + 1, right)
        }
        if (left > 0 && right < left) {
            bt(i + 1, str + ')', left, right + 1)
        }
    }
    bt(0, '', 0, 0)
    return res
};