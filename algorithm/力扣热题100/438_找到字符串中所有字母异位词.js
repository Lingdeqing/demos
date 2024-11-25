/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let i = 0, j = 0;
    let win = new Map()

    let res = []
    let valid = 0
    let need = new Map();
    for (let k = 0; k < p.length; k++) {
        need.set(p[k], (need.get(p[k]) || 0) + 1)
    }

    while (j < s.length) {
        if (need.has(s[j])) {
            win.set(s[j], (win.get(s[j]) || 0) + 1)
            if (need.get(s[j]) === win.get(s[j])) {
                valid++
            }
        }
        j++;

        while (j - i > p.length) {
            if (need.has(s[i])) {
                if (win.get(s[i]) === need.get(s[i])) {
                    valid--
                }
                win.set(s[i], (win.get(s[i]) || 0) - 1)
            }
            i++;
        }
        if (valid === need.size) {
            res.push(i)
        }
    }

    return res;
};

console.log(findAnagrams('baa', 'aa'))