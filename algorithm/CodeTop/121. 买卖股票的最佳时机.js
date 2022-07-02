// 121. 买卖股票的最佳时机
// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices) {
    let dp = Array.from({ length: prices.length }, () => []) // dp[i][k][0|1] 第i天最多交易k次持有/不持有股票
    for (let i = 0; i < prices.length; i++) {
        if (i === 0) {
            dp[i][0] = 0
            dp[i][1] = -prices[i]
        } else {
            dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
            // dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
            // 只能交易一次
            dp[i][1] = Math.max(dp[i - 1][1], - prices[i])
        }
    }
    return dp[prices.length - 1][0]
}