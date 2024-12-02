/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {

    // dp[i] 表示以s[i]结尾的最长有效括号的长度
    const dp = new Array(s.length).fill(0)
    const st = []
    let res = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            st.push(i)
            dp[i] = 0
        } else {
            if (st.length > 0) {
                const left = st.pop()
                const len = i - left + 1 + (dp[left - 1] || 0)
                dp[i] = len
            } else {
                dp[i] = 0
            }
        }
        res = Math.max(res, dp[i])
    }
    return res
};