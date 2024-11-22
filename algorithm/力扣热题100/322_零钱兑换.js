/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {

    const memo = new Map()
    // dp表示使用coins凑成amount需要的金币数量
    function dp(coins, amount) {
        if (amount === 0) return 0;
        if (amount < 0) return -1;
        if (memo.has(amount)) return memo.get(amount)

        let res = Infinity
        for (let coin of coins) {
            const sub = dp(coins, amount - coin)
            if (sub !== -1) {
                res = Math.min(res, sub + 1)
            }
        }
        res = res === Infinity ? -1 : res;
        memo.set(amount, res)
        return res
    }

    return dp(coins, amount)
};