// 枪打出头鸟
// https://www.nowcoder.com/practice/1504075c856248748ca444c8c093d638?tpId=196&&tqId=37268&rp=1&ru=/ta/job-code-total&qru=/ta/job-code-total/question-ranking

// 单调栈
function solve(n, a) {
    let stack = [], ans = 0
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && a[stack[stack.length - 1]] <= a[i]) {
            stack.pop()
        }
        if (stack.length > 0) {
            ans += stack[stack.length - 1] + 1
        }
        stack.push(i)
    }
    return ans
}