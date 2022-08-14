// 151. 颠倒字符串中的单词
// https://leetcode.cn/problems/reverse-words-in-a-string/


var reverseWords = function (s) {
    return s.trim().split(/\s+/).reverse().join(' ')
}