/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const memo = new Map()

    // dp[i, j]表示s[i,...], p[j,...]是否匹配
    function dp(i, j) {
        if (memo.has(i + ',' + j)) return memo.get(i + ',' + j)
        if (i >= s.length) {
            if (j < p.length) {
                if ((p.length - j) % 2 === 1) return false // p还剩奇数未匹配
                for (let k = j + 1; k < p.length; k += 2) { // p剩余的偶数位不是*
                    if (p[k] !== '*') return false
                }
            }
            return true
        }
        if (j >= p.length) return false

        let res = false
        if (s[i] === p[j] || p[j] === '.') {
            if (p[j + 1] === '*') res = dp(i + 1, j) || dp(i, j + 2)

            else res = dp(i + 1, j + 1)
        } else {
            if (p[j + 1] === '*') res = dp(i, j + 2)
            else res = false
        }
        memo.set(i + ',' + j, res)
        return res
    }

    return dp(0, 0)
};

console.log(isMatch('a', 'ab*'))