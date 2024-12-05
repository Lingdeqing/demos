// https://labuladong.online/algo/essential-technique/binary-search-framework/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    return [leftBound(nums, target), rightBound(nums, target)]
};

function leftBound(nums, target) {
    let i = 0, j = nums.length - 1;
    while (i <= j) {
        const mid = i + ((j - i) >> 1)
        if (nums[mid] < target) {
            i = mid + 1;
        } else if (nums[mid] > target) {
            j = mid - 1;
        } else {
            j = mid - 1
        }
    }
    if (i >= nums.length || nums[i] !== target) return -1
    return i
}



function rightBound(nums, target) {
    let i = 0, j = nums.length - 1;
    while (i <= j) {
        const mid = i + ((j - i) >> 1)
        if (nums[mid] < target) {
            i = mid + 1;
        } else if (nums[mid] > target) {
            j = mid - 1;
        } else {
            i = mid + 1
        }
    }
    if (j < 0 || nums[j] !== target) return -1
    return j
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))