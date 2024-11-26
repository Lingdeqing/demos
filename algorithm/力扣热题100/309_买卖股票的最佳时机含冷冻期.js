/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    // 记住
    // dp[i][k][0] 今天是第i天，我现在手上没有股票，至今最多进行k次交易
    // dp[i][k][1] 今天是第i天，我现在手上持有股票，至今最多进行k次交易
    // dp[i][k][0] = Math.max(dp[i-1][k][0], dp[i-1][k][1]+prices[i])
    // dp[i][k][1] = Math.max(dp[i-1][k][1], dp[i-1][k-1][0]-prices[i])
    // dp[...][0][0] = dp[-1][...][0]= 0
    // dp[...][0][1] = dp[-1][...][1]= -Infinity

    // dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]+prices[i])
    // dp[i][1] = Math.max(dp[i-1][1], dp[i-2][0]-prices[i])
    // dp[...][0] = dp[-1][0]= 0
    // dp[...][1] = dp[-1][1]= -Infinity


    const dp = Array.from({ length: prices.length }, () => new Array(2).fill(0))
    for (let i = 0; i < prices.length; i++) {
        if (i - 1 < 0) {
            dp[0][0] = 0;
            dp[0][1] = -prices[0]
            continue;
        }
        if (i - 2 < 0) {
            dp[1][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
            dp[1][1] = Math.max(dp[i - 1][1], -prices[i])
            continue;
        }

        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i])
    }

    return dp[prices.length - 1][0];
};