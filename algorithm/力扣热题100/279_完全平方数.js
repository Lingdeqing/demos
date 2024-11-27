/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    const memo = new Map()
    // dp[i]表示 和为i的平方数的最小数量
    function dp(i) {
        if (i === 0) return 0;
        if (memo.has(i)) return memo.get(i)
        let res = Infinity;
        for (let k = 1; k * k <= i; k++) {
            res = Math.min(res, dp(i - k * k) + 1)
        }
        memo.set(i, res)
        return res
    }
    return dp(n);
};