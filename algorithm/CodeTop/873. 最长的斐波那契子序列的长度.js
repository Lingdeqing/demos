// 873. 最长的斐波那契子序列的长度
// https://leetcode.cn/problems/length-of-longest-fibonacci-subsequence/

function lenLongestFibSubseq(arr) {
    let res = 0, i = 0, j = 0, k = 0, n = arr.length
    // dp[i][j]表示以 x_i, x_j 结尾的最长的递增斐波那契子序列, i:[0,n-2], j:[1,n-1]
    let dp = Array.from({ length: n }, () => new Array(n).fill(0))
    dp[0][1] = 2
    for (i = 1; i <= n - 2; i++) {
        for (j = 2; j <= n - 1; j++) {
            dp[i][j] = 0
            for (k = 0; k < i; k++) {
                if (arr[k] + arr[i] === arr[j]) {
                    dp[i][j] = Math.max(3, dp[k][i] + 1)
                }
            }
            res = Math.max(res, dp[i][j])
        }

    }
    return res
}

// 考虑单调递增性，使用哈希进行存储数值映射 https://leetcode.cn/problems/length-of-longest-fibonacci-subsequence/solution/by-ac_oier-beo2/
function lenLongestFibSubseq2(arr = []) {
    const map = new Map() // 哈希加速查找
    arr.forEach((n, i) => map.set(n, i))
    let res = 0, i = 0, j = 0, k = 0, prev = 0, n = arr.length
    // dp[i][j]表示以 x_i, x_j 结尾的最长的递增斐波那契子序列, i:[0,n-2], j:[1,n-1]
    let dp = Array.from({ length: n }, () => new Array(n).fill(0))
    dp[0][1] = 2
    for (i = 1; i <= n - 2; i++) {
        for (j = 2; j <= n - 1; j++) {
            dp[i][j] = 0
            prev = arr[j] - arr[i]
            // prev < arr[i]减枝，prev>=arr[i]，则不满足j>i>k
            if (prev < arr[i] && map.has(prev) && (k = map.get(prev)) < i) {
                dp[i][j] = Math.max(3, dp[k][i] + 1)
            }
            res = Math.max(res, dp[i][j])
        }

    }
    return res
}

function lenLongestFibSubseq3(arr = []) {
    const map = new Map() // 哈希加速查找
    arr.forEach((n, i) => map.set(n, i))
    let res = 0, i = 0, j = 0, k = 0, prev = 0, n = arr.length
    // dp[i][j]表示以 x_i, x_j 结尾的最长的递增斐波那契子序列, i:[0,n-2], j:[1,n-1]
    let dp = Array.from({ length: n }, () => new Array(n).fill(0))
    dp[0][1] = 2
    for (j = 2; j <= n - 1; j++) {
        dp[i][j] = 0
        // i + 2 > res，如果i+2<=res，则即使i前面的都算进来也不如当前最大值大了
        for (i = j - 1; i >= 1 && i + 2 > res; i--) {
            prev = arr[j] - arr[i]
            // prev < arr[i]减枝，prev>=arr[i]，则不满足j>i>k
            if (prev >= arr[i]) break;
            if (map.has(prev) && (k = map.get(prev)) < i) {
                dp[i][j] = Math.max(3, dp[k][i] + 1)
            }
            res = Math.max(res, dp[i][j])
        }
    }
    return res
}
console.log(lenLongestFibSubseq3([1, 3, 7, 11, 12, 14, 18]))