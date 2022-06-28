// 316. 去除重复字母
// https://leetcode.cn/problems/remove-duplicate-letters/

function removeDuplicateLetters(s) {
    const count = {}
    for (let ch of s) {
        count[ch] = (count[ch] || 0) + 1
    }

    const stack = [], inStack = {};
    for (let ch of s) {
        count[ch]--
        // 去重
        if (inStack[ch]) continue

        // 把后面还会再出现的 且 比即将要入栈的字符序大 的出掉
        if (stack.length > 0) {
            let top = stack[stack.length - 1]
            while (stack.length > 0 && ch < top && count[top] > 0) {
                inStack[stack.pop()] = false
                if (stack.length === 0) break;
                top = stack[stack.length - 1]
            }
        }
        stack.push(ch)
        inStack[ch] = true
    }

    return stack.join('')
}

console.log(removeDuplicateLetters("bcabc"))