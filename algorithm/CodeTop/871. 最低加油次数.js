// 871. 最低加油次数
// https://leetcode.cn/problems/minimum-number-of-refueling-stops/

const PriorityQueue = require("../lib/PriorityQueue")
function minRefuelStops(target, startFuel, stations) {
    let fuel = startFuel, location = 0, i = 0, pq = new PriorityQueue((a, b) => a > b), res = 0
    while (location < target) {
        if (fuel === 0) {
            if (!pq.isEmpty()) {
                fuel = pq.poll()
                res++
            } else {
                return -1
            }
        }
        location += fuel
        fuel = 0
        while (i < stations.length && stations[i][0] <= location) {
            pq.add(stations[i++][1])
        }
    }
    return res
}

console.log(minRefuelStops(100,
    10,
    [[10, 60], [20, 30], [30, 30], [60, 40]]))