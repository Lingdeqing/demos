// 820. 单词的压缩编码
// https://leetcode.cn/problems/short-encoding-of-words/

function minimumLengthEncoding(words) {
    words.sort((a, b) => b.length - a.length)
    let set = new Set(), res = 0
    for (let word of words) {
        if (set.has(word)) continue;
        res += word.length + 1
        for (let i = 0; i < word.length; i++) {
            set.add(word.slice(i))
        }
    }
    return res
}

function minimumLengthEncoding2(words) {
    let set = new Set(words), res = 0
    for (let word of words) {
        for (let i = 1; i < word.length; i++) {
            set.delete(word.slice(i))
        }
    }
    for (let word of set) {
        res += word.length + 1
    }
    return res
}

// 一种新的数据结构字典树/Trie树/前缀树
// 在处理某个字符串是否是给定单词列表的前缀或者后缀时
// 题解：https://leetcode.cn/problems/short-encoding-of-words/solution/99-java-trie-tu-xie-gong-lue-bao-jiao-bao-hui-by-s/
function minimumLengthEncoding3(words) {
    words.sort((a, b) => b.length - a.length)
    let tree = new Trie(), res = 0
    for (let word of words) {
        res += tree.insert(word)
    }
    return res
}
class TrieNode {
    children = new Array(26).fill(null)
}
class Trie {
    root = new TrieNode();
    insert(word = '') {
        let cur = this.root;
        let isNew = false;
        // 倒序插入树
        for (let i = word.length - 1; i >= 0; i--) {
            const index = word.charCodeAt(i) - 'a'.charCodeAt(0)
            if (!cur.children[index]) {
                isNew = true // 是新单词
                cur.children[index] = new TrieNode()
            }
            cur = cur.children[index]
        }
        return isNew ? word.length + 1 : 0
    }
}

console.log(minimumLengthEncoding(["time", "me"]))