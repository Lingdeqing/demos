// NC125 和为K的连续子数组
// https://www.nowcoder.com/practice/704c8388a82e42e58b7f5751ec943a11?tpId=196&&tqId=37127&rp=1&ru=/ta/job-code-total&qru=/ta/job-code-total/question-ranking

// 前缀和
function maxlenEqualK(arr, k) {
    const prefix = [0]
    for (let i = 0; i < arr.length; i++) {
        prefix[i + 1] = prefix[i] + arr[i]
    }
    // twoSum思路
    const map = new Map()
    let ans = 0
    for (let i = 0; i < prefix.length; i++) {
        if (map.has(prefix[i] - k)) {
            ans = Math.max(ans, i - map.get(prefix[i] - k))
        }
        // 相同的前缀和取前面小的
        if (!map.has(prefix[i])) {
            map.set(prefix[i], i)
        }

    }
    return ans
}
console.log(maxlenEqualK([0, 1, 2, 3], 3))