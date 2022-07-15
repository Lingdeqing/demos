// 745. 前缀和后缀搜索
// https://leetcode.cn/problems/prefix-and-suffix-search/

/**
 * @param {string[]} words
 */
var WordFilter = function (words) {
    this.map = new Map()
    words.forEach((word, i) => {
        let len = word.length
        for (let pl = 1; pl <= word.length; pl++) {
            for (let sl = 1; sl <= word.length; sl++) {
                this.map.set(word.slice(0, pl) + '#' + word.slice(len - sl), i)
            }
        }
    })
};

/** 
 * @param {string} pref 
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function (pref, suff) {
    return this.map.get(pref + '#' + suff) ?? -1
};

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */

a = new WordFilter(['apple'])
a.f('a', 'e')


// 前缀树
// todo