var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return ''
    for (let j = 0; j < strs[0].length; j++) {
        const ch = strs[0][j]
        for (let i = 1; i < strs.length; i++) {
            if (j >= strs[i].length || strs[i][j] !== ch) return strs[0].slice(0, j)
        }
    }
    return strs[0]
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return ''
    function getCommonPrefix(s1, s2) {
        let i = 0
        while (i < s1.length && i < s2.length && s1[i] === s2[i]) i++
        return s1.slice(0, i)
    }
    let s1 = strs[0], i = 1
    while (i < strs.length) {
        s1 = getCommonPrefix(s1, strs[i])
        if (s1 === '') return ''
        i++
    }
    return s1
};