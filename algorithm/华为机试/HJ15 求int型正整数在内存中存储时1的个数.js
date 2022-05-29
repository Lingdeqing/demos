// https://www.nowcoder.com/practice/440f16e490a0404786865e99c6ad91c9


function count1(n) {
    // return n.toString().replace(/0/g, '').length
    let res = 0

    while (n) {
        if (n & 1) {
            res++
        }
        n = n >> 1;
    }
    return res
}
console.log(count1(19934318))