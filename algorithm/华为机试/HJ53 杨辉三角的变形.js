// https://www.nowcoder.com/practice/8ef655edf42d4e08b44be4d777edbf43

function yanghui(n) {
    if (n <= 2) return -1
    return [2, 3, 2, 4][(n - 1 - 2) % 4]
}

// 老实人会超时😒
function yanghui(n) {
    const arr = new Array(n - 1)
    for (let i = 0; i < n; i++) {
        arr[i] = new Array(2 * i + 1)
        if (i === 0) { // 第0行
            arr[i][0] = 1
            continue;
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            arr[i][j] = 0;
            if (j - 2 >= 0 && j - 2 < 2 * (i - 1) + 1) {
                arr[i][j] += arr[i - 1][j - 2]
            }
            if (j - 1 >= 0 && j - 1 < 2 * (i - 1) + 1) {
                arr[i][j] += arr[i - 1][j - 1]
            }
            if (j >= 0 && j < 2 * (i - 1) + 1) {
                arr[i][j] += arr[i - 1][j]
            }
        }
    }
    const res = arr[n - 1].findIndex(item => item % 2 === 0)
    return res === -1 ? -1 : res + 1
}