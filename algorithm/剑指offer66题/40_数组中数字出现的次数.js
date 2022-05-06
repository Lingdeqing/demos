/**
    题目：
        一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。
 */

// time: 
// space: 
// 出现一次的2个数字，其他数字都出现两次
function singleNumbers(nums) {
    let res = 0
    for (let num of nums) {
        res ^= num
    }
    let m = 1; // 我们根据异或的性质可以知道：res中至少有一位是1，否则x与y就是相等的
    // 可能有多个位都为1，我们找到最低位的1，用那个位置的1划分为为两个子数组
    while ((m & res) === 0) { // 说明res当前的bit位是0，说明 x⊕y 对应bit位相等
        m <<= 1; // 不断向高位探测，直到bit位是1，也就是 x⊕y 对应bit位不相等
    }
    let x = 0, y = 0
    for (let num of nums) {
        if ((num & m) === 0) { // 对于bit位都是0的分到一组
            x ^= num
        } else { // 对于bit位都是1的分到另外一组
            y ^= num
        }
    }
    return [x, y]
}

// 出现一次的1个数字，其他数字都出现两次
// 利用了 a⊕a=0，0⊕a=a，a⊕b=b⊕a => a⊕a⊕b⊕b⊕...⊕x=x
function singleNumber(nums) {
    let res = 0
    for (let num of nums) {
        res ^= num
    }
    return
}
