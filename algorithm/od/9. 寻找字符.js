// 题目描述：
// 给定两个字符串，
// 从字符串2中找出字符串1中的所有字符，
// 去重并按照ASCII码值从小到大排列，

// 输入描述
// 字符范围满足ASCII编码要求，
// 输入字符串1长度不超过1024，
// 字符串2长度不超过100

// 输出描述
// 按照ASCII由小到大排序

// 示例一
// 输入

// bach
// bbaaccddfg
// COPY
// 输出

// abc
// COPY
// 示例二
// 输入

// fach
// bbaaccedfg
// COPY
// 输出

// acf

function solution(s1, s2) {
    const set1 = new Set([...s1])
    let set2 = new Set()
    for (let c of s2) {
        if (set1.has(c)) {
            set2.add(c)
        }
    }
    return [...set2].sort().join('')
}

console.log(solution('fach', 'bbaaccedfg'))