// 1081. 不同字符的最小子序列
// https://leetcode.cn/problems/smallest-subsequence-of-distinct-characters/

function smallestSubsequence(s) {
    let map = new Map()
    for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1)
    }

    let stack = [], inStack = new Set()
    const top = () => stack[stack.length - 1]
    for (let ch of s) {
        map.set(ch, map.get(ch) - 1)
        if (inStack.has(ch)) continue;
        while (stack.length > 0 && ch < top() && map.get(top()) > 0) {
            inStack.delete(stack.pop())
        }
        stack.push(ch)
        inStack.add(ch)
    }
    return stack.join('')
}

console.log(smallestSubsequence('bcabc'))