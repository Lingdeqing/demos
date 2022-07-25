
// 题目描述：
// 输入一个英文文章片段，
// 翻转指定区域的单词顺序，
// 标点符号和普通字母一样处理，
// 例如输入字符串
// I am a developer.
// [0,3]
// 则输出
// developer. a am I

// 输入描述
// 使用换行隔开3个参数
// 第一个参数为文章内容 即英文字符串
// 第二个参数为翻转起始单词下标，下标从0开始
// 第三个参数为结束单词下标

// 输出描述
// 翻转后英文文章片段每个单词之间以一个半角空格分割输出

// 示例一
// 输入
// I am a developer.
// 0
// 3
// 输出

// developer. a am I
// COPY
// 示例二
// 输入
// hello world!
// 0
// 3
// 输出
// world! hello

function solution(range, words) {
    let [start, end] = range
    words = words.split(' ')
    start = Math.max(start, 0)
    end = Math.min(end, words.length - 1)
    while (start < end) {
        ;[words[start], words[end]] = [words[end], words[start]];
        start++;
        end--;
    }
    // for (let i = 0; i < Math.floor((end - start + 1) / 2); i++) {
    //     ;[words[i + start], words[end - i]] = [words[end - i], words[i + start]]
    // }
    return words.join(' ')
}

console.log(solution([0, 3], 'I am a developer.'))