// 134. 加油站
// https://leetcode.cn/problems/gas-station/

// 暴力法，超时了
function canCompleteCircuit(gas, cost) {
    for (let start = 0; start < gas.length; start++) {
        let i = start, oil = 0
        for (; i < start + gas.length + 1; i++) {
            const j = i % gas.length
            if (i === start) {
                oil = oil + gas[j]
            } else {
                if (oil < cost[(j - 1 + gas.length) % gas.length]) break;
                oil = oil - cost[(j - 1 + gas.length) % gas.length] + gas[j]
            }
        }
        if (i === start + gas.length + 1) {
            return start
        }
    }
    return -1
}

// labuladong找规律：https://labuladong.github.io/algo/3/27/101/
// 图像法较难理解
// 规律法：假如从i无法走到j，那么i到j之间所有的点都无法作为起点
// 假设 tank 记录当前油箱中的油量，如果从站点 i 出发（tank = 0），走到 j 时恰好出现 tank < 0 的情况，那说明走到 i, j 之间的任意站点 k 时都满足 tank > 0，对吧。

// 如果把 k 作为起点的话，相当于在站点 k 时 tank = 0，那走到 j 时必然有 tank < 0，也就是说 k 肯定不能是起点。

// 拜托，从 i 出发走到 k 好歹 tank > 0，都无法达到 j，现在你还让 tank = 0 了，那更不可能走到 j 了对吧。

// 推导证明：https://leetcode.cn/problems/gas-station/solution/jia-you-zhan-by-leetcode-solution/

function canCompleteCircuit2(gas, cost) {
    let tank = 0
    for (let i = 0; i < gas.length; i++) {
        tank += gas[i] - cost[i]
    }
    if (tank < 0) return -1

    let start = 0
    tank = 0
    for (let i = 0; i < gas.length; i++) {
        tank += gas[i] - cost[i]
        if (tank < 0) {
            start = i + 1
            tank = 0
        }
    }
    return start % gas.length
}

console.log(canCompleteCircuit([2, 3, 4],
    [3, 4, 3]))