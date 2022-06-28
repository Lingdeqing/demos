// 322. 零钱兑换
// https://leetcode.cn/problems/coin-change/

function coinChangeError(coins, amount) {
    coins.sort((a, b) => b - a)
    let res = 0, min = Infinity
    function backtrack(start, target) {
        if (target <= 0) {
            return target === 0
        }
        for (let i = start; i < coins.length; i++) {
            const count = Math.floor(target / coins[i])
            // 这边错了，count为0，只是不把这个硬币加入而已，不能continue
            // if (count === 0) continue;
            res += count
            // Math.floor(target / coins[i])这样错了，可能当前硬币不需要，得全部用下面的硬币凑
            // 或者当前硬币不拿满，留给下面硬币空间
            // 比如[5,7,22]凑46，按照这种错误的写法，用2*5+2*7+22可以凑出，但是这种写法凑不出来
            // 这种写法，会先尝试22*2余2凑gg；接着7*6余4凑gg；接着5*9余1凑gg
            if (backtrack(i + 1, target - count * coins[i])) {
                return true
            }
            res -= count
        }
        return false
    }
    return backtrack(0, amount) ? res : -1
}

// 修复想上面的过错，但是也只能判断是否能凑整数，求最少的硬币数量还是要穷举
// 比如 1,7,12 凑14 显然2个7就是最少的
function coinChangeError2(coins, amount) {
    coins.sort((a, b) => b - a)
    let res = 0
    function backtrack(start, target) {
        if (target <= 0) {
            return target === 0
        }
        for (let i = start; i < coins.length; i++) {
            const count = Math.floor(target / coins[i])
            for (let k = count; k >= 0; k--) {
                // 这边错了，count为0，只是不把这个硬币加入而已，不能continue
                // if (count === 0) continue;
                res += k
                // Math.floor(target / coins[i])这样错了，可能当前硬币不需要，得全部用下面的硬币凑
                // 或者当前硬币不拿满，留给下面硬币空间
                // 比如[5,7,22]凑46，按照这种错误的写法，用2*5+2*7+22可以凑出，但是这种写法凑不出来
                // 这种写法，会先尝试22*2余2凑gg；接着7*6余4凑gg；接着5*9余1凑gg
                if (backtrack(i + 1, target - k * coins[i])) {
                    return true
                }
                res -= k
            }
        }
        return false
    }
    return backtrack(0, amount) ? res : -1
}

// 无脑穷举
function coinChange(coins, amount) {
    let memo = {}
    function backtrack(target) {
        if (target === 0) return 0;
        if (target < 0) return -1;
        if (memo[target]) return memo[target]
        let res = Infinity
        for (let i = 0; i < coins.length; i++) {
            const sub = backtrack(target - coins[i])
            if (sub === -1) continue;
            res = Math.min(sub + 1, res)
        }
        memo[target] = res === Infinity ? -1 : res
        return memo[target]
    }
    return backtrack(amount)
}

console.log(coinChangeError2([186, 419, 83, 408], 6249))