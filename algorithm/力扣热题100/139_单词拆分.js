var wordBreak = function (s, wordDict) {
    const wordSet = new Set(wordDict);
    const memo = new Array(s.length).fill(-1)
    // dp[i] 表示s中从i到结尾是否可以由wordDict单词拼接而成
    function dp(i) {
        if (i === s.length) return true
        if (memo[i] !== -1) return memo[i] === 1
        for (let j = i + 1; j <= s.length; j++) {
            const prefix = s.substring(i, j);
            if (wordSet.has(prefix)) {
                if (dp(j)) {
                    memo[i] = 1
                    return true
                }
            }
        }
        memo[i] = 0
        return false;
    }
    return dp(0)
};

wordBreak('leetcode', ["leet", "code"])