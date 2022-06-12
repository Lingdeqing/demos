// 剑指 Offer 48. 最长不含重复字符的子字符串
// https://leetcode.cn/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/

function lengthOfLongestSubstring(s = '') {
    let i = 0, j = 0, win = new Map(), res = 0
    while (j < s.length) {
        win.set(s[j], (win.get(s[j]) || 0) + 1)
        j++;

        while (i < j && win.get(s[j - 1]) > 1) {
            win.set(s[i], win.get(s[i]) - 1)
            i++
        }
        res = Math.max(j - i, res)
    }
    return res
}