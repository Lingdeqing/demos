/**
    题目：
       在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
 */

// time: 
// space: 

function firstUniqChar(s) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], !map.has(s[i]))
    }
    // js中Map是有序哈希表，所以找到第一个uniq就是第一次出现的字符
    for (let [c, uniq] of map) {
        if (uniq) {
            return c
        }
    }
    return ' '
}

// function firstUniqChar(s) {
//     const map = new Map();
//     for (let i = 0; i < s.length; i++) {
//         map.set(s[i], (map.get(s[i]) || 0) + 1)
//     }
//     for (let [c, i] of map) {
//         if (1 === i) {
//             return c
//         }
//     }
//     return ' '
// }


// function firstUniqChar(s) {
//     const map = new Map(), set = new Set()
//     for (let i = 0; i < s.length; i++) {
//         if (set.has(s[i])) {
//             map.delete(s[i])
//         } else {
//             map.set(s[i], i)
//             set.add(s[i])
//         }
//     }
//     let min = s.length
//     for (let [, i] of map) {
//         if (min > i) {
//             min = i
//         }
//     }
//     return min === s.length ? ' ' : s[min]
// }


function firstUniqChar(s) {
    const arr = new Array(26).fill(0), a = 'a'.charCodeAt(0)
    for (let i = 0; i < s.length; i++) {
        arr[s.charCodeAt(i) - a]++
    }
    for (let i = 0; i < s.length; i++) {
        if (arr[s.charCodeAt(i) - a] === 1) {
            return s[i]
        }
    }
    return ' '
}