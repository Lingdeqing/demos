// 3. 无重复字符的最长子串
// https://leetcode.cn/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s) {
    let win = new Map(), i = 0, j = 0, res = 0
    while (j < s.length) {
        win.set(s[j], (win.get(s[j]) || 0) + 1);
        j++;

        while (win.get(s[j - 1]) > 1) {
            win.set(s[i], win.get(s[i]) - 1);
            if (win.get(s[i]) === 0) {
                win.delete(s[i])
            }
            i++;
        }
        res = Math.max(res, win.size)
    }
    return res
}