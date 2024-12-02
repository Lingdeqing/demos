

// 直接二分
// 将数组一分为二，其中一定有一个是有序的，另一个可能是有序，也能是部分有序。
// 此时有序部分用二分法查找。无序部分再一分为二，其中一个一定有序，另一个可能有序，可能无序。就这样循环. 
var search = function (nums, target) {
    let i = 0, j = nums.length - 1;
    while (i <= j) {
        const mid = i + ((j - i) >> 1)
        if (nums[mid] === target) return mid
        if (nums[mid] < nums[j]) { // [mid, j]必然有序
            if (nums[mid] < target && target <= nums[j]) {
                i = mid + 1
            } else {
                j = mid - 1
            }
        } else {
            if (target >= nums[i] && target < nums[mid]) { // [i, mid] 必然有序
                j = mid - 1
            } else {
                i = mid + 1
            }
        }
    }
    return -1
};