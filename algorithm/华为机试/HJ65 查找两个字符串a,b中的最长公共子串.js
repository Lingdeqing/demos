// https://www.nowcoder.com/practice/181a1a71c7574266ad07f9739f791506


// 力扣题解：https://leetcode.cn/problems/maximum-length-of-repeated-subarray/solution/zui-chang-zhong-fu-zi-shu-zu-by-leetcode-solution/

// 滑动窗口法-更好想，但是这边要获取短串中第一次出现的最长公共子串，写起来不太好写
// 还是用动态规划公共后缀法吧，想清楚了一气呵成
// 题解：https://leetcode.cn/problems/maximum-length-of-repeated-subarray/solution/wu-li-jie-fa-by-stg-2/
function findLength(s1, s2) {
    if (s1.length > s2.length) { // 控制s1是短串
        ;[s1, s2] = [s2, s1];
    }
    const m = s1.length, n = s2.length;
    let maxCommonLen = 0, maxCommonStr = '', maxCommonStart = 0;
    for (let i = 0; i < m; i++) {
        findMax(i, 0, Math.min(n, m - i))
    }
    for (let i = 0; i < n; i++) {
        findMax(0, i, Math.min(m, n - i))
    }
    function findMax(s1Start, s2Start, len) {
        let commonLen = 0, commonStart = 0, commonEnd = 0
        for (let k = 0; k < len; k++) {
            if (s1[s1Start + k] === s2[s2Start + k]) {
                commonLen++
                commonEnd = k
            } else {
                if (commonLen > maxCommonLen) {
                    maxCommonLen = commonLen
                    maxCommonStr = s1.slice(commonStart + s1Start, commonEnd + s1Start + 1)
                    maxCommonStart = commonStart + s1Start; // 记录下在短串中的起点
                } else if (commonLen === maxCommonLen) {
                    if (maxCommonStart > commonStart + s1Start) {
                        maxCommonStr = s1.slice(commonStart + s1Start, commonEnd + s1Start + 1)
                        maxCommonStart = commonStart + s1Start; // 更靠近短串前面的公共子串
                    }
                }
                commonLen = 0
                commonStart = k + 1
            }
        }
        if (commonLen > maxCommonLen) {
            maxCommonLen = commonLen
            maxCommonStr = s1.slice(commonStart + s1Start, commonEnd + s1Start + 1)
            maxCommonStart = commonStart + s1Start; // 记录下在短串中的起点
        } else if (commonLen === maxCommonLen) {
            if (maxCommonStart > commonStart + s1Start) {
                maxCommonStr = s1.slice(commonStart + s1Start, commonEnd + s1Start + 1)
                maxCommonStart = commonStart + s1Start; // 更靠近短串前面的公共子串
            }
        }
    }
    return maxCommonStr
}

console.log(findLength(
    'efgyiffxoonftmmvd',
    'exwzdcwjsttuhsxrcpzplpnfqxqsqtlfctdkgacejitayoafucmfxxhkxyixxykndchyjc'
))

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

