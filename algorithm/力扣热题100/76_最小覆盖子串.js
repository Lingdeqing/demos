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
    let i = 0, j = 0;
    let valid = 0;
    let res = Infinity, start = 0, end = 0
    while (j < s.length) {
        if (need.has(s[j])) {
            win.set(s[j], (win.get(s[j]) || 0) + 1)
            if (win.get(s[j]) === need.get(s[j])) {
                valid++
            }
        }
        j++

        while (valid === need.size) {
            if (j - i < res) {
                res = j - i
                start = i
                end = j
            }

            if (need.has(s[i])) {
                if (win.get(s[i]) === need.get(s[i])) {
                    valid--
                }
                win.set(s[i], win.get(s[i]) - 1)
            }
            i++
        }
    }
    return res === Infinity ? '' : s.slice(start, end)
};

console.log(minWindow("ADOBECODEBANC",
    "ABC"
))