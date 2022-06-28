// 383. 赎金信
// https://leetcode.cn/problems/ransom-note/

function canConstruct(ransomNote, magazine) {
    const map = new Map()
    for (let ch of magazine) {
        map.set(ch, (map.get(ch) || 0) + 1)
    }
    for (let ch of ransomNote) {
        if (!map.has(ch)) return false;
        let count = map.get(ch) - 1
        if (count > 0) {
            map.set(ch, count)
        } else {
            map.delete(ch)
        }
    }
    return true
}