// 676. 实现一个魔法字典
// https://leetcode.cn/problems/implement-magic-dictionary/

// 暴力
var MagicDictionary = function () {
};

/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dictionary) {
    this.set = new Set(dictionary)
};

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < searchWord.length; i++) {
        const head = searchWord.slice(0, i), tail = searchWord.slice(i + 1)
        for (let j = 0; j < 26; j++) {
            if (letters[j] !== searchWord[i] && this.set.has(head + letters[j] + tail)) {
                return true
            }
        }
    }
    return false
};







// 字典树
var MagicDictionary = function () {
};

/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dictionary) {
    this.dict = new Trie(dictionary)
};

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {
    return this.dict.search(searchWord)
};

class TrieNode {
    children = new Array(26)
    isWord = false
}
class Trie {
    constructor(words) {
        this.root = new TrieNode()
        words.forEach((word) => this.insert(word))
    }
    insert(word = '') {
        let cur = this.root;
        for (let i = 0; i < word.length; i++) {
            const code = word.charCodeAt(i) - 'a'.charCodeAt(0);
            if (!cur.children[code]) {
                cur.children[code] = new TrieNode()
            }
            cur = cur.children[code]
        }
        cur.isWord = true
    }
    search(word = '') {
        function dfs(node, limit, i) {
            if (limit < 0 || !node) {
                return false
            }
            if (node.isWord && word.length === i && limit === 0) {
                return true
            }
            const code = word.charCodeAt(i) - 'a'.charCodeAt(0)
            for (let j = 0; j < node.children.length; j++) {
                if (node.children[j]) {
                    if (dfs(node.children[j], j === code ? limit : limit - 1, i + 1)) {
                        return true
                    }
                }
            }
            return false
        }
        return dfs(this.root, 1, 0)
    }
}
const a = new MagicDictionary()
a.buildDict(["hello", "leetcode"])
console.log(a.search("hello"))
console.log(a.search("leetcoded"))