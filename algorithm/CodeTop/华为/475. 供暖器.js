// 475. 供暖器
// https://leetcode.cn/problems/heaters/

// 穷举
function findRadius(houses, heaters) {
    const res = new Array(houses.length).fill(Infinity)
    for (let i = 0; i < houses.length; i++) {
        for (let j = 0; j < heaters.length; j++) {
            res[i] = Math.min(res[i], Math.abs(houses[i] - heaters[j]))
        }
    }
    return Math.max(...res)
}

// 排序+双指针
function findRadius2(houses, heaters) {
    houses.sort((a, b) => a - b)
    heaters.sort((a, b) => a - b)
    heaters.unshift(-Infinity)
    heaters.push(Infinity)
    let res = 0, cur = 0;
    for (let i = 0; i < houses.length; i++) {
        while (cur < heaters.length) {
            if (heaters[cur] > houses[i]) {
                break
            }
            cur++
        }
        dis = Math.min(Math.abs(heaters[cur] - houses[i]), Math.abs(heaters[cur - 1] - houses[i]))
        res = Math.max(res, dis)
    }
    return res
}

// 对heaters排序后，再用二分查找查找最近的heater

console.log(findRadius2([1, 2, 3],
    [2]))