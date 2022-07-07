// 648. 单词替换
// https://leetcode.cn/problems/replace-words/

function replaceWords(dictionary, sentence) {
    let words = sentence.split(' '), set = new Set(dictionary)
    return words.map(word => {
        for (let i = 1; i <= word.length; i++) {
            const prefix = word.slice(0, i)
            if (set.has(prefix)) {
                return prefix
            }
        }
        return word
    }).join(' ')
}

// 前缀树
function replaceWords2(dictionary, sentence) {
    let words = sentence.split(' '), tree = new Trie()
    dictionary.forEach(word => {
        tree.insert(word)
    })
    return words.map(word => {
        return tree.findPrefix(word) || word
    }).join(' ')
}
class TrieNode {
    children = new Array(26).fill(null)
    isPrefix = false
}
class Trie {
    root = new TrieNode()
    insert(word = '') {
        let cur = this.root
        for (let i = 0; i < word.length; i++) {
            const code = word.charCodeAt(i) - 'a'.charCodeAt(0)
            if (!cur.children[code]) {
                cur.children[code] = new TrieNode()
            }
            cur = cur.children[code]
        }
        cur.isPrefix = true
    }
    findPrefix(word = '') {
        let cur = this.root
        for (let i = 0; i < word.length; i++) {
            const code = word.charCodeAt(i) - 'a'.charCodeAt(0)
            if (cur.children[code]) {
                if (cur.children[code].isPrefix) {
                    return word.slice(0, i + 1)
                } else {
                    cur = cur.children[code]
                }
            } else if (!cur.children[code]) {
                return cur.isPrefix ? word.slice(0, i) : word
            }

        }
        return word
    }
}
console.log(replaceWords2(["cat", "bat", "rat"],
    "the cattle was rattled by the battery"))