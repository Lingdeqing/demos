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
// 快慢指针
var moveZeroes = function (nums) {
    let i = 0, j = 0;
    while (j < nums.length) {
        if (nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
        j++
    }
}