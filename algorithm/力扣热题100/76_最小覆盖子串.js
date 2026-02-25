/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const need = new Map()
    for (let ch of t) {
        need.set(ch, (need.get(ch) || 0) + 1)
    }

    const win = new Map()
    let valid = 0
    let i = 0, j = 0
    let res = '', minLen = Infinity
    while (j < s.length) {
        win.set(s[j], (win.get(s[j]) || 0) + 1)
        if (win.get(s[j]) === need.get(s[j])) valid++
        j++;

        while (valid === need.size) {
            if (minLen > j - i) {
                res = s.slice(i, j)
                minLen = j - i
            }
            if (win.get(s[i]) === need.get(s[i])) valid--
            win.set(s[i], (win.get(s[i]) || 0) - 1)
            i++
        }
    }

    return res
}