// 1109. 航班预订统计
// https://leetcode.cn/problems/corporate-flight-bookings/

// 暴力
function corpFlightBookings(bookings, n) {
    const answer = new Array(n).fill(0)
    for (let i = 0; i < bookings.length; i++) {
        const [first, last, seats] = bookings[i]
        for (let k = first - 1; k <= last - 1; k++) {
            answer[k] += seats
        }
    }
    return answer
}

// 差分数组：适用于对数组区间频繁增减
// https://labuladong.github.io/algo/2/18/23/
function corpFlightBookings(bookings, n) {
    const diff = new Array(n).fill(0)
    const inc = (k, i, j) => {
        diff[i] += k;
        if (j + 1 < diff.length) {
            diff[j + 1] -= k;
        }
    }
    const build = () => {
        if (diff.length === 0) return []
        const res = [diff[0]]
        for (let i = 1; i < diff.length; i++) {
            res[i] = diff[i] + res[i - 1]
        }
        return res
    }

    for (let i = 0; i < bookings.length; i++) {
        const [first, last, seats] = bookings[i]
        inc(seats, first - 1, last - 1)
    }

    return build()
}