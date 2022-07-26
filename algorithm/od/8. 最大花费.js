// 题目描述：
// 双11众多商品进行打折销售，小明想购买一些自己心仪的商品，
// 但由于受购买资金限制，所以他决定从众多心意商品中购买3件，
// 而且想尽可能的花完资金，
// 现在请你设计一个程序帮助小明计算尽可能花费的最大资金额。

// 输入描述
// 第一行为整型数组M，数组长度小于100，数组元素记录单个商品的价格；
// 单个商品价格小于1000；
// 第二行输入为购买资金的额度R；
// R < 100000。

// 输出描述
// 输出为满足上述条件的最大花费额度
// 如果不存在满足上述条件的商品请返回-1

// 示例一
// 输入
// 23,26,36,27
// 78

// 输出
// 76

// 示例二
// 输入
// 23,30,40
// 26
// 输出
// -1

function solution(prices, money) {
    let ans = -1, minDiff = Infinity
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            for (let k = j + 1; k < prices.length; k++) {
                let sum = prices[i] + prices[j] + prices[k]
                if (money >= sum && money - sum < minDiff) {
                    minDiff = money - sum
                    ans = sum
                }
            }
        }
    }
    return ans
}

console.log(solution([23, 30, 40], 26))