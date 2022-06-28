// 1100. 长度为 K 的无重复字符子串

function numKLenSubstrNoRepeats(s, k) {
    let i = 0, j = 0, win = new Map(), res = []
    while (j < s.length) {
        win.set(s[j], (win.get(s[j]) || 0) + 1)
        j++;

        while (win.size > k || (i < j - 1 && win.get(s[j - 1]) > 1)) {
            win.set(s[i], (win.get(s[i]) || 0) - 1)
            if (win.get(s[i]) === 0) {
                win.delete(s[i])
            }
            i++
        }

        if (win.size === k) {
            res.push(s.slice(i, j))
        }
    }

    return res
}

console.log(numKLenSubstrNoRepeats('home', 5))