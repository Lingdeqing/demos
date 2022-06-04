// 123. 买卖股票的最佳时机 III
// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/

// 股票类题解：https://labuladong.github.io/algo/3/26/94/
function maxProfit(prices) {
    const dp = []// dp[i][k][0|1] // 第i天最多交易k次的情况下手上持有或不持有股票时的最大收益
    const maxK = 2;
    for (let i = 0; i < prices.length; i++) {
        dp[i] = Array.from({ length: maxK + 1 }, () => [0, 0])
        for (let k = 1; k < maxK + 1; k++) {
            if (i === 0) {
                dp[i][k][0] = 0 // 最多交易>0次 没有持有股票
                dp[i][k][1] = -prices[i] // 最多交易>0次 持有股票
                continue
            }
            dp[i][k][0] = Math.max(
                dp[i - 1][k][0], // 第i天没有操作
                dp[i - 1][k][1] + prices[i] // 第i天卖了股票
            )
            dp[i][k][1] = Math.max(
                dp[i - 1][k][1], // 第i天没有操作
                dp[i - 1][k - 1][0] - prices[i] // 第i天买了股票
            )
        }
    }
    return dp[prices.length - 1][maxK][0]
}


// 6倍快乐


// 121. 买卖股票的最佳时机
// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/
function maxProfit(prices) {
    const dp = []// dp[i][k][0|1] // 第i天最多交易k次的情况下手上持有或不持有股票时的最大收益
    for (let i = 0; i < prices.length; i++) {
        dp[i] = []
        if (i === 0) {
            dp[i][0] = 0
            dp[i][1] = - prices[i]
            continue
        }
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(- prices[i], dp[i - 1][1])
    }
    return dp[prices.length - 1][0]
}



// 122. 买卖股票的最佳时机 II
// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/
function maxProfit(prices) {
    const dp = []// dp[i][k][0|1] // 第i天最多交易k次的情况下手上持有或不持有股票时的最大收益
    for (let i = 0; i < prices.length; i++) {
        dp[i] = []
        if (i === 0) {
            dp[i][0] = 0
            dp[i][1] = - prices[i]
            continue
        }
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
    }
    return dp[prices.length - 1][0]
}

// 309. 最佳买卖股票时机含冷冻期
// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/
function maxProfit(prices) {
    const dp = []
    for (let i = 0; i < prices.length; i++) {
        dp[i] = []
        if (i === 0) {
            dp[i][0] = 0
            dp[i][1] = - prices[i]
            continue
        }
        if (i === 1) {
            dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
            // dp[i-2][0] = dp[-1][0] = 0 第-1天没有持有,利润为0
            // dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i])
            dp[i][1] = Math.max(dp[i - 1][1], - prices[i])
            continue
        }
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i])
    }
    return dp[prices.length - 1][0]
}

// 714. 买卖股票的最佳时机含手续费
// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
function maxProfit(prices, fee) {
    const dp = []
    for (let i = 0; i < prices.length; i++) {
        dp[i] = []
        if (i === 0) {
            dp[i][0] = 0
            dp[i][1] = - prices[i] - fee
            continue;
        }
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i] - fee)
    }
    return dp[prices.length - 1][0]
}

// 188. 买卖股票的最佳时机 IV
// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv/
function maxProfit(maxK, prices) {
    if (prices.length === 0) return 0
    const dp = []
    for (let i = 0; i < prices.length; i++) {
        dp[i] = Array.from({ length: maxK + 1 }, () => [0, 0])
        for (let k = 1; k <= maxK; k++) {
            if (i === 0) {
                dp[i][k][0] = 0
                dp[i][k][1] = - prices[i]
                continue;
            }
            dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
            dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])
        }
    }
    return dp[prices.length - 1][maxK][0]
}