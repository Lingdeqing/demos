// 16. 最接近的三数之和
// https://leetcode.cn/problems/3sum-closest/

// 和nSum一类题目
// 双指针法，主要是为了方便去重
function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b)
    let res = Infinity
    for (let i = 0; i < nums.length - 2; i++) {
        const sum = twoSum(nums, i + 1, target - nums[i])
        if (Math.abs(sum + nums[i] - target) < Math.abs(res - target)) {
            res = sum + nums[i]
        }
    }
    function twoSum(nums, left, target) {
        let i = left, j = nums.length - 1;
        let res = Infinity
        while (i < j) {
            const leftVal = nums[i], rightVal = nums[j]
            const sum = leftVal + rightVal
            if (Math.abs(sum - target) < Math.abs(res - target)) {
                res = sum
            }
            if (sum > target) {
                while (i < j && nums[j] === rightVal) j--;
            } else if (sum < target) {
                while (i < j && nums[i] === leftVal) i++;
            } else {
                while (i < j && nums[i] === leftVal) i++;
                while (i < j && nums[j] === rightVal) j--;
            }
        }
        return res
    }
    return res
}

console.log(threeSumClosest([-1, 2, 1, -4],
    1))