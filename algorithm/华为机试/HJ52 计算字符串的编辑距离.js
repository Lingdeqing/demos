// https://www.nowcoder.com/practice/f9c6f980eeec43ef85be20755ddbeaf4

// 最短编辑距离
// labuladong：https://labuladong.github.io/algo/3/24/74/

function minEdit(s1, s2) {
    // 返回s1[0-i]与s2[0-j]的最短编辑距离
    const memo = new Map()
    function recur(s1, s2, i, j) {
        if (i < 0 && j < 0) return 0;
        if (i < 0) return j + 1;
        if (j < 0) return i + 1;

        const key = i + '-' + j
        if (memo.has(key)) return memo.get(key)

        if (s1[i] === s2[j]) {
            memo.set(key, recur(s1, s2, i - 1, j - 1))
        } else {
            memo.set(key, Math.min(recur(s1, s2, i, j - 1) + 1, recur(s1, s2, i - 1, j) + 1, recur(s1, s2, i - 1, j - 1) + 1))
        }
        return memo.get(key)
    }
    return recur(s1, s2, s1.length - 1, s2.length - 1)
}