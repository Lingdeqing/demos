// https://www.nowcoder.com/practice/ae809795fca34687a48b172186e3dafe

function reverseInt(n) {
    // return n.toString().split('').reverse().join('')
    let res = ''
    while (n !== 0) {
        res += n % 10
        n = Math.floor(n / 10)
    }
    return res
}