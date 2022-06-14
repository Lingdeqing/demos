// 132. 分割回文串 II
// https://leetcode.cn/problems/palindrome-partitioning-ii/

// 通过测试用例：31 / 36
function minCut(s) {
    let res = 0
    function recur(left, right) {
        if (left >= right) {
            return
        }
        let [start, len] = longestPalindrome(s, left, right)
        if (start > left && start + len - 1 < right) { // 切成3段
            res += 2;
            recur(left, start - 1);
            recur(start + len, right);
        } else if (start === left && start + len - 1 === right) {// 切成1段
            res += 0;
        } else if (start === left) {// 2段
            res += 1;
            recur(start + len, right);
        } else {// 2段
            res += 1;
            recur(left, start - 1);
        }
    }
    recur(0, s.length - 1)
    return res
}

function longestPalindrome(s, left, right) {
    let maxStart = 0, maxLen = 0;
    for (let i = left; i <= right; i++) {
        palindrome(s, i, i)
        if (i + 1 <= right) {
            palindrome(s, i, i + 1)
        }
    }
    function palindrome(s, i, j) {
        while (i >= left && j <= right && s[i] === s[j]) {
            i--;
            j++;
        }
        if (j - 1 - (i + 1) + 1 > maxLen) {
            maxLen = j - 1 - (i + 1) + 1;
            maxStart = i + 1;
        }
    }
    return [maxStart, maxLen]
}


function minCut2(s) {
    const dp = [0] // dp[i]表示[0...i]的最小分割

    // const isPalindrome = (i, j) => {
    //     while (i <= j && s[i] === s[j]) {
    //         i++;
    //         j--;
    //     }
    //     return i >= j
    // }
    const isPalindromeDp = Array.from({ length: s.length }, () => new Array(s.length).fill(false)) // isPalindrome[i][j]表示[i..j]是否是回文串
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j >= 0; j--) {
            if (i === j) {
                isPalindromeDp[j][i] = true
            } else if (s[i] === s[j]) {
                isPalindromeDp[j][i] = i - j === 1 || isPalindromeDp[j + 1][i - 1] // 长度为2或者中间还是回文串
            } else {
                isPalindromeDp[j][i] = false
            }
        }
    }
    const isPalindrome = (i, j) => isPalindromeDp[i][j]

    for (let i = 0; i < s.length; i++) {
        if (isPalindrome(0, i)) {
            dp[i] = 0
        } else {
            dp[i] = i
            for (let j = 1; j <= i; j++) {
                if (isPalindrome(j, i)) {
                    dp[i] = Math.min(dp[i], dp[j - 1] + 1)
                }
            }
        }
    }
    return dp[s.length - 1]
}
console.log(minCut2("aab"))