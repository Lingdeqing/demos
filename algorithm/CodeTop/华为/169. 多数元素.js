// 169. 多数元素
// https://leetcode.cn/problems/majority-element/

// 摩尔投票法
// 1. 还可以用Map统计个数
// 2. 排序后取中间那个数
// 3. 随机取然后数下是否是众数，期望O(n)，最差O(∞)
// 4. 分治
function majorityElement(nums) {
    let count = 0, res = 0
    for (let num of nums) {
        if (count === 0) {
            res = num
            count++
        } else if (num === res) {
            count++
        } else {
            count--
        }
    }
    return res
}

console.log(majorityElement([3, 3, 4]))