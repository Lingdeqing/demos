class TrieNode {
    isKey = false
    children = new Array(26).fill(null)
}
var Trie = function () {
    this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let p = this.root
    for (let i = 0; i < word.length; i++) {
        const index = word.charCodeAt(i) - 'a'.charCodeAt(0)
        if (!p.children[index]) {
            p.children[index] = new TrieNode()
        }
        p = p.children[index]
    }
    p.isKey = word;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let p = this.root
    for (let i = 0; i < word.length; i++) {
        const index = word.charCodeAt(i) - 'a'.charCodeAt(0)
        if (!p.children[index]) {
            return false
        }
        p = p.children[index]
    }
    return p.isKey
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let p = this.root
    for (let i = 0; i < prefix.length; i++) {
        const index = prefix.charCodeAt(i) - 'a'.charCodeAt(0)
        if (!p.children[index]) {
            return false
        }
        p = p.children[index]
    }
    return true
};

