// 55. 跳跃游戏

// 贪心
function canJump(nums) {
    let max = 0; // 最远跳到的位置
    for (let i = 0; i < nums.length-1; i++) {
        max = Math.max(max, i + nums[i])
        // 没有跳出当前位置
        if (max <= i) {
            return false
        }
    }
    return max >= nums.length - 1
}



// 动态规划
function canJump(nums) {
    const dp = new Array(nums.length) // dp[i]:能够跳到nums[i]位置
    dp[0] = true;
    for (let i = 1; i < nums.length; i++) {
        dp[i] = false
        for (let j = i - 1; j >= 0; j--) {
            if (dp[j] && nums[j] >= i - j) {
                dp[i] = true
                break;
            }
        }
    }
    return dp[nums.length - 1]
}
