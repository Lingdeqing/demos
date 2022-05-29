// https://www.nowcoder.com/practice/fe298c55694f4ed39e256170ff2c205f

function drink(n) {
    // let res = 0
    // while (n >= 3) {
    //     const swap = Math.floor(n / 3)
    //     res += swap;
    //     n = swap + n % 3
    // }
    // if (n === 2) {
    //     res++
    // }
    // return res

    return ~~(n / 2) // 直接这样就可以了，每两个瓶子借一个瓶子，喝完把借的还了
}