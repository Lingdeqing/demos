/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    const memo = {}
    function bt(start, end) {
        if (start >= end) return 1
        const key = start + ',' + end
        if (memo[key]) return memo[key]
        let res = 0
        for (let i = start; i <= end; i++) {
            const leftNum = bt(start, i - 1)
            const rightNum = bt(i + 1, end)
            res += leftNum * rightNum
        }
        memo[key] = res
        return res
    }
    return bt(1, n)
};
console.log(numTrees(3))