// 牛牛的魔法值
// https://www.nowcoder.com/practice/4d7d8a61ad2f4c9b9f130a35a97b49f5?tpId=196&&tqId=37262&rp=1&ru=/ta/job-code-total&qru=/ta/job-code-total/question-ranking

// 暴力
function solve(n, a) {
    let ans = 0
    for (let i = 1; i < a.length - 1; i++) {
        let l = i - 1, r = i + 1;
        while (l >= 0 && a[l] < a[i]) l--;
        while (r < a.length && a[r] < a[i]) r++;
        if (l >= 0) {
            ans = Math.max(ans, a[l] ^ a[i])
        }
        if (r < a.length) {
            ans = Math.max(ans, a[r] ^ a[i])
        }
    }
    return ans
}


// 单调栈
function solve(n, a) {
    let ans = 0, stack = []
    for (let i = 0; i < a.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1] < a[i]) {
            stack.pop()
        }
        if (stack.length > 0) {
            ans = Math.max(ans, stack[stack.length - 1] ^ a[i])
        }
        stack.push(a[i])
    }

    stack = []
    for (let i = a.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] < a[i]) {
            stack.pop()
        }
        if (stack.length > 0) {
            ans = Math.max(ans, stack[stack.length - 1] ^ a[i])
        }
        stack.push(a[i])
    }
    return ans
}

console.log(solve(10, [3, 7, 0, 9, 6, 5, 8, 4, 1, 2]))