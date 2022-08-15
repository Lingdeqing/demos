// 14. 最长公共前缀
// https://leetcode.cn/problems/longest-common-prefix/





var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return ''
    let prefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
        prefix = commonPrefix(prefix, strs[i])
    }
    return prefix
};
function commonPrefix(prefix, str) {
    const n = Math.min(prefix.length, str.length);
    for (let i = 0; i < n; i++) {
        if (prefix[i] !== str[i]) {
            return prefix.slice(0, i)
        }
    }
    return prefix.length > str.length ? str : prefix
}