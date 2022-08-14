// 1048. 最长字符串链
// https://leetcode.cn/problems/longest-string-chain/


var longestStrChain = function (words) {
    // words.sort((a, b) => a.length - b.length)
    // let res = 0
    // function dp(length, prev, start) {
    //     res = Math.max(res, length)
    //     if (start >= words.length) {
    //         return
    //     }
    //     if (res >= words.length - start + length) {
    //         return
    //     }
    //     for (let i = start; i < words.length; i++) {
    //         if (length === 0 || isNext(prev, words[i])) {
    //             dp(length + 1, words[i], i + 1)
    //         }
    //     }
    // }
    // dp(0, '', 0)
    // return res
};


var longestStrChain = function (words) {
    words.sort((a, b) => a.length - b.length)
    let dp = new Array(words.length).fill(1) // dp[i] 表示以words[i]结尾的最长字符串链长度
    let res = 0
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < i; j++) {
            if (isNext(words[j], words[i])) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        res = Math.max(res, dp[i])
    }
    return res
};
function isNext(s1, s2) {
    if (s1.length + 1 !== s2.length) return false
    for (let i = 0, j = 0; j < s2.length; j++) {
        if (s1[i] === s2[j]) i++;
        if (i === s1.length) return true
    }
    return false
}

console.log(longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"]))