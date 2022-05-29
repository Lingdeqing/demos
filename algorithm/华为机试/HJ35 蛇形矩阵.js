// https://www.nowcoder.com/practice/649b210ef44446e3b1cd1be6fa4cab5e

function snake(n) {
    const arr = new Array(n)
    for (let i = 0, k = 1; i < n; i++) {
        for (let j = i; j >= 0; j--) {
            if (!arr[j]) arr[j] = []
            arr[j][i - j] = k++;
        }
    }
    return arr;
}
console.log(snake(4))