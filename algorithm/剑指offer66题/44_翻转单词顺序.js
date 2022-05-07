/**
    题目：
        牛客最近来了一个新员工Fish，每天早晨总是会拿着一本英文杂志，写些句子在本子上。同事Cat对Fish写的内容颇感兴趣，有一天他向Fish借来翻看，但却读不懂它的意思。例如，“student. a am I”。后来才意识到，这家伙原来把句子单词的顺序翻转了，正确的句子应该是“I am a student.”。Cat对一一的翻转这些单词顺序可不在行，你能帮助他么？
 */

// time: 
// space:
// 由于js中字符串不可变性，所以无法写出原地算法
// c语言可以原地调整字符串
// student. a am I
// 反转 I ma a .tneduts
// 反转每个单词 I am a student.

// 遍历
function rotateStr(s) {
    let res = ''
    let i = s.length - 1, j = i;
    while (i >= 0) {
        let append = false
        // 寻找单词左边界
        while (i >= 0 && s[i] !== ' ') i--;
        // 拼接单词
        for (let k = i + 1; k <= j; k++) {
            res += s[k]
            append = true // 拼了单词
        }
        // 寻找单词右边界
        while (s[i] === ' ') i--;
        j = i;

        // 拼接单词间空格，拼了单词&&还剩有单词
        if (append && i >= 0) res += ' ';
    }
    return res
}


// 库函数
function rotateStr(s) {
    const words = s.split(' ');
    words.reverse();
    return words.join(' ')
}