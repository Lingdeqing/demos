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


var numTrees = function (n) {
    const memo = {}
    function dp(n) {
        if (n === 0) return 1
        if (memo[n]) return memo[n]
        let res = 0
        for (let i = 1; i <= n; i++) {
            // 以i为根，[1...i-1]作为左子树，[i+1...n]作为右子树，遍历所有数字作为根的情况叠加起来就是所有的情况
            // 子树的数量跟区间没有关系，只和区间长度有关系，比如[1,2,3]构成的bst的数量和[4,5,6]一样
            // 所以dp(n)表示n个不同数字构成的bst数量
            res += dp(i - 1) * dp(n - i)
        }
        memo[n] = res
        return res
    }
    return dp(n)
}
console.log(numTrees(3))