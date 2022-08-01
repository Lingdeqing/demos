/*
    给定参数n 从1到n会有n个整数 1，2，3，...n
    这n个数字共有n!种排列 按大小顺序升序列出所有排列情况
    并一一标记
    当n=3时，所有排列如下
    "123","132","213","231","312","321"
    给定n和k 返回第n个排列

    输入描述
    第一行为n
    第二行为k
    n的范围是 1~9
    k的范围是 1~n!

    输出描述
    输出排列第k位置的数字

    示例一：
    输入
    3
    3
    输出
    213

    示例二:
    输入
    2
    2
    输出
    21
     */
function solution(n, k) {
    let visited = {}, ans = null
    function backtrack(path = []) {
        if (path.length === n || ans) {
            k--
            if (k === 0) {
                ans = [...path]
            }
            return;
        }
        for (let i = 1; i <= n; i++) {
            if (visited[i]) continue
            path.push(i)
            visited[i] = true
            backtrack(path)
            path.pop()
            visited[i] = false
        }
    }
    backtrack([])
    return ans
}

console.log(solution(2, 2))