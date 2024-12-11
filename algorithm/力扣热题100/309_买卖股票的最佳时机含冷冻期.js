/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // dp[i][k][0|1] 表示到第i天最多交易了k次的利润，0表示第i天未持有股票，1表示第i天持有股票
    // dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1]+prices[i])
    // dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0]-prices[i])

    // 不限制次数
    // dp[i][0] = max(dp[i-1][0], dp[i-1][1]+prices[i])
    // dp[i][1] = max(dp[i-1][1], dp[i-1][0]-prices[i])

    // 冷静期
    // dp[i][0] = max(dp[i-1][0], dp[i-1][1]+prices[i])
    // dp[i][1] = max(dp[i-1][1], dp[i-2][0]-prices[i])

    const dp = Array.from({ length: prices.length }, () => new Array(2).fill(0))
    for (let i = 0; i < prices.length; i++) {
        if (i === 0) {
            dp[i][0] = 0
            dp[i][1] = - prices[i]
        } else if (i === 1) {
            dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
            dp[i][1] = Math.max(dp[i - 1][1], - prices[i])
        } else {
            dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
            dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i])
        }
    }
    return dp[prices.length - 1][0]
}