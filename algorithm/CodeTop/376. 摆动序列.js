// 376. 摆动序列
// https://leetcode.cn/problems/wiggle-subsequence/


function wiggleMaxLength(nums) {
    let up = [1], // up[i] 表示[0...i]个元素里面以某个结尾的升摆动序列的最大长度
        down = [1] // down[i] 表示[0...i]个元素里面以某个结尾的降摆动序列的最大长度
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            up[i] = up[i - 1]
            down[i] = Math.max(down[i - 1], up[i - 1] + 1)
        } else if (nums[i] > nums[i - 1]) {
            up[i] = Math.max(up[i - 1], down[i - 1] + 1)
            down[i] = down[i - 1]
        } else {
            up[i] = up[i - 1]
            down[i] = down[i - 1]
        }
    }
    return Math.max(up[nums.length - 1], down[nums.length - 1])
}


// https://leetcode.cn/problems/wiggle-subsequence/solution/376-bai-dong-xu-lie-tan-xin-jing-dian-ti-vyxt/
// 贪心找峰值，注意开头技巧
function wiggleMaxLength2(nums) {
    if (nums.lengt === 0) return0
    let res = 1, preDiff = 0, curDiff = 0
    for (let i = 0; i < nums.length - 1; i++) {
        curDiff = nums[i + 1] - nums[i]
        if ((preDiff <= 0 && curDiff > 0) || (preDiff >= 0 && curDiff < 0)) {
            res++
            preDiff = curDiff
        }
    }
    return res
}