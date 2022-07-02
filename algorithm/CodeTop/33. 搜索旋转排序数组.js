// 33. 搜索旋转排序数组
// https://leetcode.cn/problems/search-in-rotated-sorted-array/

function search(nums, target) {
    let left = 0, right = nums.length - 1, mid = 0
    while (left <= right) {
        mid = left + Math.floor((right - left) / 2)
        if (nums[mid] === target) return mid
        if (nums[mid] < nums[right]) { // [mid+1, right]有序
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        } else { // [left, mid-1]有序
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    }
    return -1
}