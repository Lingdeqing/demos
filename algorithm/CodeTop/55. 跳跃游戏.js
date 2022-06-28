// 55. 跳跃游戏
// https://leetcode.cn/problems/jump-game/

function canJump(nums) {
    let maxPos = 0
    for (let i = 0; i < nums.length - 1; i++) {
        maxPos = Math.max(i + nums[i], maxPos)
        if (i >= maxPos) { // 其他位置必须跳出当前位置
            return false
        }
    }
    return maxPos >= nums.length - 1 // 最后一个位置可以不跳出当前位置
}


function canJump2(nums) {
    let maxPos = 0
    for (let i = 0; i < nums.length; i++) {
        maxPos = Math.max(i + nums[i], maxPos)
        if (maxPos >= nums.length - 1) { // 跳出了最后
            return true
        } else if (maxPos <= i) { // 没有跳到当前位置
            return false
        }
    }
}