// https://www.nowcoder.com/practice/49e772ab08994a96980f9618892e55b6


function addBigInt(s1, s2) {
    let res = [], carry = 0, i = 0, m = s1.length, n = s2.length
    while (i < m || i < n || carry) {
        const a = +s1[m - i - 1] || 0
        const b = +s2[n - i - 1] || 0
        const sum = a + b + carry
        carry = Math.floor(sum / 10)
        res.unshift(sum % 10)
        i++
    }
    return res.join('')
}
function addBigInt(s1, s2){
    return (BigInt(s1)+BigInt(s2)).toString()
}
console.log(addBigInt('2178',
    '81'))
