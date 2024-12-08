/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let i = 0, j = nums.length - 1, k = 0
    while (k <= j) { // 考虑只有两种颜色时， k < nums.length 也就是 k<=nums.length-1
        if (nums[k] === 0) {
            [nums[k], nums[i]] = [nums[i], nums[k]];
            i++;
        } else if (nums[k] === 2) {
            [nums[k], nums[j]] = [nums[j], nums[k]];
            j--;
        } else if (nums[k] === 1) {
            k++
        }

        if (k < i) k = i

    }
};