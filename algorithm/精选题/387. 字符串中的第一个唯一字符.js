// 387. 字符串中的第一个唯一字符
// https://leetcode.cn/problems/first-unique-character-in-a-string/

var firstUniqChar = function (s) {
    const map = new Map()
    for (let i in s) {
        map.set(s[i], !map.has(s[i]))
    }
    for (let i in s) {
        if (map.get(s[i])) {
            return i
        }
    }
    return -1
};

console.log(firstUniqChar("aadadaad"))