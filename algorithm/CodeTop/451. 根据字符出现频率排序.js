// 451. 根据字符出现频率排序
// https://leetcode.cn/problems/sort-characters-by-frequency/

// 可以使用桶排序可以稍微优化点性能，因为字符频率个数有限最多为s.length
// https://leetcode.cn/problems/sort-characters-by-frequency/solution/gen-ju-zi-fu-chu-xian-pin-lu-pai-xu-by-l-zmvy/
// 桶排序：https://www.cnblogs.com/bigsai/p/13396391.html
function frequencySort(s) {
    const map = new Map()
    for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1)
    }
    let res = '';
    [...map.entries()].sort((a, b) => -a[1] + b[1]).forEach(([ch, num]) => {
        res += ch.repeat(num)
    })
    return res
}