/**
    题目：
    在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
 */

// 好像和 34题 重复了
// time: 
// space: 

function firstUniqChar(s) {
    const map = new Map()
    for (let c of s) {
        map.set(c, !map.has(c))
    }
    for (let [c, uniq] of map) {
        if (uniq) return c
    }
    return false
}