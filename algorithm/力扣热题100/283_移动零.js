/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    function recur(nums, i) {
        if (i >= nums.length) return 0
        const trailZeroNum = recur(nums, i + 1)
        if (nums[i] === 0) {
            for (let k = i; k < nums.length - trailZeroNum - 1; k++) {
                nums[k] = nums[k + 1]
            }
            nums[nums.length - trailZeroNum - 1] = 0;
            return trailZeroNum + 1
        }
        return trailZeroNum
    }
    recur(nums, 0)
};

var moveZeroes2 = function (nums) {
    let slow = 0, fast = 0;
    while (fast < nums.length) {
        if (nums[fast] !== 0) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++;
    }

    while (slow < nums.length) {
        nums[slow] = 0;
        slow++
    }
};