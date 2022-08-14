// 3. 无重复字符的最长子串
// https://leetcode.cn/problems/longest-substring-without-repeating-characters/




function lengthOfLongestSubstring(s) {
    let i = 0, j = 0, res = 0, map = new Map()
    while (j < s.length) {
        map.set(s[j], (map.get(s[j]) || 0) + 1)
        j++;
        while (map.get(s[j - 1]) > 1) {
            map.set(s[i], map.get(s[i]) - 1)
            i++
        }
        res = Math.max(j - i, res)
    }
    return res
}