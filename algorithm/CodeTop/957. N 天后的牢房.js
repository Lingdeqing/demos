// 957. N 天后的牢房
// https://leetcode.cn/problems/prison-cells-after-n-days/

// 因为只有8位，最多256种情况，每一种情况对应的下一种情况是确定的，所以迟早会循环起来
function prisonAfterNDays(cells, n) {
    const map = new Map()
    for (let i = 0; i < n; i++) {
        let temp = new Array(8).fill(0)
        for (let k = 1; k <= 6; k++) {
            if ((cells[k - 1] === 0 && cells[k + 1] === 0) ||
                (cells[k - 1] === 1 && cells[k + 1] === 1)
            ) {
                temp[k] = 1
            } else {
                temp[k] = 0
            }
        }
        cells = temp

        if (i === n - 1) {
            return cells
        }

        const num = parseInt(cells.join(''), 2)
        if (map.has(num)) break
        console.log(cells.join(','), i)
        map.set(num, cells)
    }
    const nums = [...map.values()]
    return nums[(n - 1 + map.size) % map.size]
}

console.log(prisonAfterNDays([1, 0, 0, 1, 0, 0, 1, 0],
    16))