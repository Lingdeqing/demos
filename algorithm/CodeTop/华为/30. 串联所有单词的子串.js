// 30. 串联所有单词的子串
// https://leetcode.cn/problems/substring-with-concatenation-of-all-words/

// 哈希统计法：https://leetcode.cn/problems/substring-with-concatenation-of-all-words/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-w-6/
// 滑动窗口：https://leetcode.cn/problems/substring-with-concatenation-of-all-words/solution/by-dodo_1202-cqbe/
function findSubstring(s, words) {
    let map = new Map(), totalLen = 0, wordLen = 0
    for (let word of words) {
        map.set(word, (map.get(word) || 0) + 1)
        totalLen += word.length
        wordLen = word.length
    }

    let res = []
    for (let i = 0; i < s.length - totalLen + 1; i++) {
        let win = new Map(), match = true
        for (let j = i; j < i + totalLen; j += wordLen) {
            const word = s.slice(j, j + wordLen)
            win.set(word, (win.get(word) || 0) + 1)
            if (!map.has(word) || win.get(word) > map.get(word)) {
                match = false
                break;
            }
        }
        if (match) {
            res.push(i)
        }
    }

    return res
}

console.log(findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"]))