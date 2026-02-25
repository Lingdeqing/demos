/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let i = 0, j = nums.length - 1, k = 0
    while (k <= j) { // 此处为什么要<=而不是<, 考虑[1,2,0]时, k=1,j=2 如果k<j [1,0,2] 此时结束循环，其实不对，从后面换到k位置的0没有再次换到前面，漏了
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