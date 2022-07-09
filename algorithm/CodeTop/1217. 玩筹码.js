// 1217. 玩筹码
// https://leetcode.cn/problems/minimum-cost-to-move-chips-to-the-same-position/

function minCostToMoveChips(position) {
    let odd = even = 0
    position.forEach(p => p % 2 === 0 ? even++ : odd++)
    return Math.min(odd, even)
}