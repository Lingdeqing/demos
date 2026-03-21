// 151. 颠倒字符串中的单词
// https://leetcode.cn/problems/reverse-words-in-a-string/

function reverseWords(s) {
    return s.split(/\s+/).reverse().join(' ')
}