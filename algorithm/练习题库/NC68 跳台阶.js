// NC68 跳台阶
// https://www.nowcoder.com/practice/8c82a5b80378478f9484d87d1c5f12a4?tpId=196&&tqId=37098&rp=1&ru=/ta/job-code-total&qru=/ta/job-code-total/question-ranking

function jumpFloor(number) {
    const memo = {}
    function dp(n) {
        if (memo[n]) return memo[n]
        if (n <= 1) return 1
        memo[n] = dp(n - 1) + dp(n - 2)
        return memo[n]
    }
    return dp(number)
}