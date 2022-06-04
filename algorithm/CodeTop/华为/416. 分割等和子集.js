// 416. 分割等和子集
// https://leetcode.cn/problems/partition-equal-subset-sum/


// 转换成背包问题
// 给一个可装载重量为 sum / 2 的背包和 N 个物品，每个物品的重量为 nums[i]。现在让你装物品，是否存在一种装法，能够恰好将背包装满？
function canPartition(nums) {
    nums.sort((a, b) => a - b)
    let sum = 0;
    for (let n of nums) sum += n;

    if (sum % 2 !== 0) return false
    sum = sum / 2;
    const m = nums.length + 1, n = sum + 1;
    const dp = new Array(m)  // dp[i][j]=true/false 表示前i物品能否正好装满容量为j的背包
    // bad case
    // dp[0][0] = true
    // dp[0][j>0] = false
    // dp[i>0][0] = true
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n).fill(false)
        dp[i][0] = true
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (nums[i - 1] > j) {
                dp[i][j] = dp[i - 1][j]
            } else {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]
            }
        }
    }

    return dp[nums.length][sum]
}

// 回溯超时了😄
function canPartition(nums) {
    nums.sort((a, b) => a - b)
    let sum = 0;
    for (let n of nums) sum += n;

    function backtrack(target, start) {
        if (target === 0 && start < nums.length) {
            return true
        }
        if (start === nums.length) {
            return false
        }
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue
            if (backtrack(target - nums[i], i + 1)) {
                return true
            }
        }
        return false
    }
    return sum % 2 === 0 ? backtrack(sum / 2, 0) : false
}

console.log(canPartition([1, 2, 3, 5]))