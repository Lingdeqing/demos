// https://www.nowcoder.com/practice/253986e66d114d378ae8de2e6c4577c1


function reverseInteger(num) {
    // return +[...new Set(num.toString().split('').reverse())].join('')
    let res = 0, cur = 0, set = new Array(10).fill(0)
    while (num) {
        cur = num % 10
        if (!set[cur]) {
            res = res * 10 + cur;
            set[cur] = 1
        }
        num = Math.floor(num / 10)
    }
    return res
}