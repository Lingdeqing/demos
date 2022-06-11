// 424. 替换后的最长重复字符
// https://leetcode.cn/problems/longest-repeating-character-replacement/

// 特征子串问题，典型滑窗
// 题解：https://leetcode.cn/problems/longest-repeating-character-replacement/solution/tong-guo-ci-ti-liao-jie-yi-xia-shi-yao-shi-hua-don/
// 解释：1.win始终正确统计窗口中字符的数量
//      2.most维护历史最大字符数量
//      3.当窗口不满足k时，移动左边界。相当于“最长窗口”向右平移一格。
//        接着继续移动右侧边界：
//        3.1 如果加入的是最大字符，则不会收缩左侧
//        3.1 此后如果最大字符数量不变，则j-i-most会持续变大，不会收缩左侧
//      这边好晕，好难理解为什么most只要维护一个历史最大就可以了
// O(n)
function characterReplacement(s, k) {
    let i = 0, j = 0, win = new Map(), most = 0
    while (j < s.length) {
        const count = (win.get(s[j]) || 0) + 1
        win.set(s[j], count)
        most = Math.max(count, most)
        j++;
        // 当 历史最大重复字符数量+k 小于窗口长度，则说明得要缩小窗口了
        // 换言之 假定 历史最大重复字符全部都出现在当前窗口中，需要修改的字符超过k，就不满足条件，需要移动左边界
        if (j - i - most > k) {
            win.set(s[i], win.get(s[i]) - 1)
            i++
        }
    }
    return j - i;
}

// O(26n)
// 还是这个好理解，😄
function characterReplacement2(s, k) {
    let i = 0, j = 0, win = new Map(), res = 0
    while (j < s.length) {
        const count = (win.get(s[j]) || 0) + 1
        win.set(s[j], count)
        j++;
        while (j - i - Math.max(...win.values()) > k) {
            win.set(s[i], win.get(s[i]) - 1)
            i++
        }
        res = Math.max(res, j - i)
    }
    return res;
}

// 这样也行，可是空间复杂度溢出了😄
// function characterReplacement(s, k) {
//     const dp = [] // dp[i][k][c]表示[0..i]经过最多k次替换后的最长重复字符c后缀的长度
//     let res = 0;
//     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

//     for (let i = 0; i < s.length; i++) {
//         dp[i] = Array.from({ length: k + 1 }, () => new Array(26).fill(0))
//         for (let j = 0; j < k + 1; j++) {
//             for (let c = 0; c < 26; c++) {
//                 if (j === 0 && i === 0) {
//                     dp[0][0][c] = s[i] === chars[c] ? 1 : 0
//                 } else if (i === 0) {
//                     dp[0][j][c] = 1
//                 } else if (j === 0) {
//                     dp[i][0][c] = s[i] === chars[c] ? dp[i - 1][0][c] + 1 : 0
//                 } else if (s[i] === chars[c]) {
//                     dp[i][j][c] = dp[i - 1][j][c] + 1
//                 } else {
//                     dp[i][j][c] = dp[i - 1][j - 1][c] + 1
//                 }
//                 res = Math.max(dp[i][j][c], res)
//             }
//         }
//     }
//     return res
// }

console.log(characterReplacement("ABAB",
    2))