// 1208. 尽可能使字符串相等
// https://leetcode.cn/problems/get-equal-substrings-within-budget/

// 前缀和+二分查找
function equalSubstring(s, t, maxCost) {
    const accDiff = [0]
    for (let i = 1; i <= s.length; i++) {
        accDiff[i] = accDiff[i - 1] + Math.abs(s.charCodeAt(i - 1) - t.charCodeAt(i - 1))
    }
    let res = 0
    for (let i = 0; i < accDiff.length; i++) {
        const j = rightBound(accDiff, i, accDiff.length - 1, maxCost + accDiff[i])
        res = Math.max(res, j - i)
    }
    return res
}
function rightBound(arr, low, high, target) {
    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);
        if (arr[mid] < target) {
            low = mid + 1
        } else if (arr[mid] > target) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return low - 1
}

// 滑动窗口
function equalSubstring2(s, t, maxCost) {
    let i = 0, j = 0, cost = 0, res = 0
    while (j < s.length) {
        cost += Math.abs(s.charCodeAt(j) - t.charCodeAt(j))
        j++

        while (cost > maxCost) {
            cost -= Math.abs(s.charCodeAt(i) - t.charCodeAt(i))
            i++
        }
        res = Math.max(res, j - i)
    }
    return res
}
// 没想明白为啥不行😁
// function equalSubstring(s, t, maxCost) {
//     // [0...m-1]的字符串在最大消耗n时的最大长度
//     function dp(m, n) {
//         // bad case

//         // 消耗为0
//         if (n <= 0) {
//             // 最长公共子串长度
//             let k = 0, res = 0
//             for (let i = 0; i < m; i++) {
//                 if (s[i] === t[i]) {
//                     k++
//                     res = Math.max(res, k)
//                 } else {
//                     k = 0
//                 }
//             }
//             return res
//         }

//         // 空串
//         if (m === 0) return 0

//         const cost = Math.abs(s.charCodeAt(m - 1) - t.charCodeAt(m - 1))
//         if (cost > n) {
//             return dp(m - 1, n)
//         }
//         return Math.max(
//             dp(m - 1, n),
//             dp(m - 1, n - cost) + 1
//         )
//     }
//     return dp(s.length - 1, maxCost)
// }

// console.log(equalSubstring("ujteygggjwxnfl",
//     "nstsenrzttikoy",
//     43))

// console.log(equalSubstring("abcd",
//     "bcdf",
//     3))

console.log(equalSubstring2(
    "krrgw",
    "zjxss",
    19
))