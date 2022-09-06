// 211. 添加与搜索单词 - 数据结构设计
// https://leetcode.cn/problems/design-add-and-search-words-data-structure/


// https://mp.weixin.qq.com/s?__biz=MzU4NDE3MTEyMA==&mid=2247488490&idx=1&sn=db2998cb0e5f08684ee1b6009b974089
var WordDictionary = function () {
    this.dict = { next: {}, end: false }
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let p = this.dict;
    for (let i = 0; i < word.length; i++) {
        if (!p.next[word[i]]) p.next[word[i]] = { next: {}, end: false }
        p = p.next[word[i]]
    }
    p.end = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    function dfs(p, start) {
        if (start === word.length) return p.end
        if (word[start] === '.') {
            for (let k of Object.keys(p.next)) {
                if (dfs(p.next[k], start + 1)) {
                    return true
                }
            }
            return false
        } else {
            if (!p.next[word[start]]) return false
            return dfs(p.next[word[start]], start + 1)
        }
    }
    return dfs(this.dict, 0)
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

//  ["WordDictionary","addWord","addWord","addWord","addWord","search","search","addWord","search","search","search","search","search","search"]
//  [[],["at"],["and"],["an"],["add"],["a"],[".at"],["bat"],[".at"],["an."],["a.d."],["b."],["a.d"],["."]]

const a = new WordDictionary()
a.addWord('at')
a.addWord('and')
a.addWord('an')
a.addWord('add')
console.log(a.search('a'))