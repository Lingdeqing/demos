// https://www.nowcoder.com/practice/f9c6f980eeec43ef85be20755ddbeaf4

// 这是0-1背包问题的变形
// 参考：https://blog.nowcoder.net/n/82b5f014a8654c8b8dbff4fe4fa727bd
// 考虑附件
function maxSatisfy3(money, goods) {
    // 筛出主件
    const main = [], newIndexToOldIndex = new Map(), subMap = new Map()
    for (let i = 0; i < goods.length; i++) {
        const mainIndex = goods[i][2] - 1
        if (mainIndex === -1) {
            main.push([[goods[i]]]) // 仅仅放主件
            newIndexToOldIndex.set(main.length - 1, i)
        } else {
            if (!subMap.has(mainIndex)) {
                subMap.set(mainIndex, [])
            }
            subMap.get(mainIndex).push(goods[i])
        }
    }

    // 附件的4种情况
    for (let i = 0; i < main.length; i++) {
        const item = main[i]
        const oldIndex = newIndexToOldIndex.get(i)
        if (subMap.has(oldIndex)) {
            const sub = subMap.get(oldIndex)
            if (sub.length === 1) {
                item.push([item[0][0], sub[0]])
            } else if (sub.length === 2) {
                item.push([item[0][0], sub[0]])
                item.push([item[0][0], sub[1]])
                item.push([item[0][0], sub[0], sub[1]])
            }
        }
    }



    const m = main.length + 1, n = money / 10 + 1;
    // dp[i][j] 表示i个“主件”物品放入容量为j的包里面最大价值
    // 某个主件放入背包中，主件对应附件有0、1、2个附件
    // 所以可以有四种放法，a.1个主件0个附件 b.1个主件附件A c.1个主件附件B d.1个主件附件A附件B
    const dp = new Array(m)
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n).fill(0)
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // 算出主件配附件的4种放法中最大的那个
            let max = dp[i - 1][j]
            for (let k = 0; k < main[i - 1].length; k++) {
                let wi = 0, vi = 0;
                for (let item of main[i - 1][k]) {
                    wi += item[0]
                    vi += item[1] * item[0]
                }
                if (j * 10 >= wi) { // 分放进去和不放进去两种，看哪个大-放入时要考虑附件
                    max = Math.max(max, dp[i - 1][j - wi / 10] + vi)
                }
            }
            dp[i][j] = max
        }
    }
    return dp[main.length][money / 10]
}

// 这是0-1背包问题的变形
// 不考虑附件
function maxSatisfy2(money, goods) {
    const m = goods.length + 1, n = money / 10 + 1;
    const dp = new Array(m) // dp[i][j] 表示i个物品放入容量为j的包里面最大价值
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n).fill(0)
    }
    for (let i = 1; i < m; i++) {
        const [wi, v] = goods[i - 1]
        const vi = v * wi
        for (let j = 1; j < n; j++) {
            if (j * 10 < wi) { // 放不进去
                dp[i][j] = dp[i - 1][j]
            } else { // 分放进去和不放进去两种，看哪个大
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - wi] + vi)
            }
        }
    }
    return dp[goods.length][money / 10]
}

// 穷举法-超时😓
function maxSatisfy(money, goods) {
    const bought = {}
    let res = 0, satisfy = 0
    function dfs(usedMoney, start) {
        for (let i = start; i < goods.length; i++) {
            const [price, weight, main] = goods[i];
            if (bought[i] || usedMoney + price > money) {
                continue
            }

            // 附件的主件处理
            let boughtMain = false
            if (main !== 0) { // 附件
                // 购买对应主件
                if (!bought[main - 1]) {
                    const [mainPrice, mainWeight] = goods[main - 1]
                    if (usedMoney + mainPrice > money
                        || usedMoney + mainPrice + price > money) { // 无法配着主件购买，到此为止
                        continue
                    }
                    // 购买对应主件
                    boughtMain = true
                    satisfy += mainWeight * mainPrice
                    usedMoney += mainPrice
                    bought[main - 1] = true
                }
            }

            satisfy += weight * price
            bought[i] = true
            res = Math.max(res, satisfy);
            dfs(usedMoney + price, i + 1);
            satisfy -= weight * price
            bought[i] = false

            // 附件的主件处理
            if (boughtMain) {
                const [mainPrice, mainWeight] = goods[main - 1]
                satisfy -= mainWeight * mainPrice
                usedMoney -= mainPrice
                bought[main - 1] = false
            }
        }
    }
    dfs(0, 0)
    return res
}


console.log(maxSatisfy3(50, `20 3 5
20 3 5
10 3 0
10 2 0
10 1 0`.split('\n').map(item => item.split(' ').map(item => +item))))