/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    const res = []
    for (let i = 0; i <= n; i++) {
        let count = 0;
        let n = i
        while (n) {
            // count += n & 1;
            // n >>= 1


            count++
            n &= (n - 1)// Brian Kernighan 算法 将二进制最后一个1变成0
        }
        res.push(count)
    }
    return res
};

// https://leetcode.cn/problems/counting-bits/solutions/7882/hen-qing-xi-de-si-lu-by-duadua/?envType=problem-list-v2&envId=2cktkvj

var countBits = function (n) {
    const res = []
    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            res.push(0)
        } else if (i % 2 === 0) {
            // 偶数1个数 等价于 折半的数
            res.push(res[i >> 1])
        } else {
            // 奇数1个数 等价于 前面那个数1的个数加1
            res.push(res[i - 1] + 1)
        }
    }
    return res
};