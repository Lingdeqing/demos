// https://www.nowcoder.com/practice/181a1a71c7574266ad07f9739f791506



// 动态规划
function longestLengthOfCommonStr(s1, s2) {
    const m = s1.length, n = s2.length;
    // dp[i][j] 表示字符串s1[0...i]和字符串s2[0...j]的最长公共后缀的长度
    // 状态方程就是，当s1[i]===s2[j]时，dp[i][j]=dp[i-1][j-1]+1否则dp[i][j]=0
    const dp = new Array(m)
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n).fill(0)
    }

    // let res = 0
    let maxStr = ''
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0) dp[i][j] = s1[i] === s2[j] ? 1 : 0;
            else dp[i][j] = s1[i] === s2[j] ? dp[i - 1][j - 1] + 1 : 0;
            // res = Math.max(res, dp[i][j])
            if (maxStr.length < dp[i][j]) {
                let k = 0;
                while (i - k >= 0 && j - k >= 0 && s1[i - k] === s2[j - k]) k++;
                maxStr = s1.slice(i - k + 1, i + 1)
            }
        }
    }
    // return res
    return maxStr
}

// 动态规划-如果有出现长度相等，则取短串中第一次出现的
function longestLengthOfCommonStr(s1, s2) {
    if (s1.length > s2.length) {
        ;[s1, s2] = [s2, s1];
    }
    const m = s1.length, n = s2.length;
    // dp[i][j] 表示字符串s1[0...i]和字符串s2[0...j]的最长公共后缀的长度
    // 状态方程就是，当s1[i]===s2[j]时，dp[i][j]=dp[i-1][j-1]+1否则dp[i][j]=0
    const dp = new Array(m)
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n).fill(0)
    }

    // let res = 0
    let maxStr = ''
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0) dp[i][j] = s1[i] === s2[j] ? 1 : 0;
            else dp[i][j] = s1[i] === s2[j] ? dp[i - 1][j - 1] + 1 : 0;
            // res = Math.max(res, dp[i][j])
            if (maxStr.length < dp[i][j]) {
                let k = 0;
                while (i - k >= 0 && j - k >= 0 && s1[i - k] === s2[j - k]) k++;
                maxStr = s1.slice(i - k + 1, i + 1)
            }
        }
    }
    // return res
    return maxStr
}

console.log(longestLengthOfCommonStr('asdfas',
    'werasdfaswer'))


// 暴力法 O(n^3)
function commonSubStr(s1, s2) {
    if (s1.length < s2.length) {
        ;[s1, s2] = [s2, s1];
    }
    for (let len = s2.length; len > 0; len--) {
        for (let start = 0; start < s2.length - len + 1; start++) {
            const subStr = s2.slice(start, start + len)
            if (s1.includes(subStr)) {
                return subStr
            }
        }
    }
    return ''
}

// 暴力法 O(n^3)
function commonSubStr2(s1, s2) {
    if (s1.length > s2.length) {
        ;[s1, s2] = [s2, s1];
    }
    let res = ''
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            let k = 0;
            while (i + k < s1.length && j + k < s2.length && s1[i + k] === s2[j + k]) k++;
            if (res.length < k) {
                res = s1.slice(i, i + k);
            }
        }
    }
    return res
}

