// https://leetcode.cn/problems/longest-substring-without-repeating-characters/

// 滑动窗口-模版
// t: O(n) s: O(n)
function lengthOfLongestSubstring(s) {
    const window = new Map()
    let maxLen = 0;
    let i = 0, j = 0;
    while (j < s.length) {
        // 增大窗口
        window.set(s[j], (window.get(s[j]) || 0) + 1)
        j++;

        // 新加入的不满足窗口条件，则收缩窗口
        while (window.get(s[j - 1]) > 1) {
            window.set(s[i], window.get(s[i]) - 1);
            i++;
        }

        // 统计最大窗口大小
        maxLen = Math.max(j - i, maxLen)
    }
    return maxLen
}

// 滑动窗口-乱七八糟
// t: O(n) s: O(n)
function lengthOfLongestSubstring(s) {
    const window = new Set()
    let maxLen = 0;
    let i = 0, j = 0;
    while (i <= j && j < s.length) {
        while (j < s.length && !window.has(s[j])) {
            window.add(s[j]);
            j++;
        }
        maxLen = Math.max(window.size, maxLen)
        while (i < s.length && j < s.length && window.has(s[j])) {
            window.delete(s[i])
            i++
        }
    }
    return maxLen
}

// 暴力
// t: O(n^2) s: O(n)
function lengthOfLongestSubstring(s) {
    let maxLen = 0;
    for (let i = 0; i < s.length; i++) {
        const set = new Set()
        for (let j = i; j < s.length; j++) {
            if (set.has(s[j])) {
                break;
            } else {
                set.add(s[j])
            }
        }
        maxLen = Math.max(set.size, maxLen)
    }
    return maxLen
}