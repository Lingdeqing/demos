
var lengthOfLongestSubstring = function (s) {
    const win = new Map()
    let res = 0
    let i = 0, j = 0;
    while (j < s.length) {
        const ch = s[j]
        win.set(ch, (win.get(ch) || 0) + 1)
        j++

        while (win.get(ch) > 1) {
            win.set(s[i], win.get(s[i]) - 1)
            i++;
        }
        res = Math.max(res, j - i)
    }
    return res
}