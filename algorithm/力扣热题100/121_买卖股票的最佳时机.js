/**
 * @param {number[]} prices
 * @return {number}
 */

// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/solutions/1692872/by-jyd-cu90/?envType=problem-list-v2&envId=2cktkvj
// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/solutions/1692872/by-jyd-cu90/comments/2262398 总结一下思路就是：如果第i天卖出股票，则最大利润为(该天的股价-前面天数中最小的股价)，然后与已知的最大利润比较，如果大于则更新当前最大利润的值。厉害，学习了。
var maxProfit = function (prices) {
    let min = Infinity
    let res = -Infinity
    for (let price of prices) {
        min = Math.min(price, min)
        res = Math.max(res, price - min)
    }
    return res
};