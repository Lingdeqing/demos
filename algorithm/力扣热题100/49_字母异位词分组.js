/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map()
    for (let str of strs) {
        const k = key(str);
        if (!map.has(k)) map.set(k, []);
        map.get(k).push(str)
    }
    return [...map.values()]
};

function key(str) {
    // return str.split('').sort().join('')
    const count = new Array(26).fill(0)
    for (let ch of str) {
        count[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }
    return count.join(',')

}