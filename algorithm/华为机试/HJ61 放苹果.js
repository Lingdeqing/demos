// https://www.nowcoder.com/practice/bfd8234bb5e84be0b493656e390bdebf

// 递归解释：https://blog.csdn.net/erzhushashade/article/details/114434924
function putApple(m, n) {
    if (m < 0 || n < 0) return 0
    if (n === 1 || m === 0) return 1
    if (m < n) {
        return putApple(m, m)
    }
    return putApple(m - n, n) + putApple(m, n - 1)
}

// function putApple(m, n) {
//     let res = 0
//     function dfs(m, n) {
//         if (m === 0) {
//             res++
//             return
//         }
//         for (let i = 0; i < m; i++) {
//             for (let j = 0; j < n; j++) {
//                 dfs(m - i, n - 1)
//             }
//         }
//     }
//     dfs(m, n)
//     return res
// }

console.log(putApple(7, 3))