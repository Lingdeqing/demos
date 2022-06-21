// 剑指 Offer 57 - II. 和为s的连续正数序列
// https://leetcode.cn/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/

function findContinuousSequence(target) {
    let i = 1, j = 1, right = Math.ceil(target / 2), sum = 0, res = []
    while (j <= right) {
        sum += j;
        j++;
        while (i < j && sum > target) {
            sum -= i;
            i++;
        }
        if (sum === target) {
            let answer = []
            for (let k = i; k < j; k++) {
                answer.push(k)
            }
            res.push(answer)
        }
    }
    return res
}
console.log(findContinuousSequence(15))