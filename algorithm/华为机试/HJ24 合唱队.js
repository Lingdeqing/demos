// https://www.nowcoder.com/practice/6d9d69e3898f45169a441632b325c7b4

// 对每个同学，找到以他结尾的最长递增子序列长度和以他开始的最长递减子序列长度，然后得到要移除的同学个数
function minOut(nums) {
    const leftLIS = new Array(nums.length).fill(1)
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                leftLIS[i] = Math.max(leftLIS[i], leftLIS[j] + 1)
            }
        }
    }
    const rightLDS = new Array(nums.length).fill(1)
    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                rightLDS[i] = Math.max(rightLDS[i], rightLDS[j] + 1)
            }
        }
    }
    let res = 5000;
    for (let i = 1; i < nums.length - 1; i++) {
        res = Math.min(res, nums.length - (leftLIS[i] + rightLDS[i] - 1))
    }
    return res
}