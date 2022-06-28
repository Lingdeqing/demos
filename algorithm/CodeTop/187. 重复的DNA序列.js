// 187. 重复的DNA序列
// https://leetcode.cn/problems/repeated-dna-sequences/

// O(N*10)
function findRepeatedDnaSequences(s = '') {
    let map = new Map()
    for (let i = 0; i <= s.length - 10; i++) {
        const subStr = s.slice(i, i + 10)
        map.set(subStr, !map.has(subStr))
    }
    let res = []
    for (let [subStr, uniq] of map.entries()) {
        if (!uniq) {
            res.push(subStr)
        }
    }
    return res
};


function findRepeatedDnaSequences(s = '') {
    const map = new Map(), res = []
    for (let i = 0; i <= s.length - 10; i++) {
        const subStr = s.slice(i, i + 10)
        map.set(subStr, (map.get(subStr) || 0) + 1)
        if (map.get(subStr) === 2) {
            res.push(subStr)
        }
    }
    return res
};