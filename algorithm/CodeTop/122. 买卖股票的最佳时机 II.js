// 122. 买卖股票的最佳时机 II
// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/

// dp通解
function maxProfit(prices) {
    const dp = []// dp[i][k][0|1] 第i天最多交易k次后持有或者卖出股票状态时，最大收益是多少
    for (let i = 0; i < prices.length; i++) {
        dp[i] = [0, 0]
        if (i === 0) {
            dp[0][0] = 0
            dp[0][1] = - prices[i]
            continue
        }
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
    }
    return dp[prices.length - 1][0]
}

// 直接贪心，每天涨了就吃利润
function maxProfit(prices) {
    let res = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - prices[i - 1] > 0) {
            res += prices[i] - prices[i - 1]
        }
    }
    return res
}