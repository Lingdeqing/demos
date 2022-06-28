// 796. 旋转字符串
// https://leetcode.cn/problems/rotate-string/

// KMP搜索子字符串，复杂度为O(m+n)
function rotateString(s, goal) {
    if (s.length !== goal.length) return false
    s = s + s;
    return s.includes(goal)
}