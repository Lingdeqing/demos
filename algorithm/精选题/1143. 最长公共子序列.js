// 1143. 最长公共子序列
// https://leetcode.cn/problems/longest-common-subsequence/




function longestCommonSubsequence(text1, text2) {
    let memo = {}
    function recur(s1, s2, i, j) {
        if (i === s1.length) return 0
        if (j === s2.length) return 0
        if (memo[i + ',' + j]) return memo[i + ',' + j]
        let res = s1[i] === s2[j] ? 1 + recur(s1, s2, i + 1, j + 1) : Math.max(recur(s1, s2, i, j + 1), recur(s1, s2, i + 1, j))
        memo[i + ',' + j] = res
        return res
    }
    return recur(text1, text2, 0, 0)
}

// abcde ace