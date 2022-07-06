// 704. 二分查找
// https://leetcode.cn/problems/binary-search/

function search(nums, target) {
    let left = 0, right = nums.length - 1, mid = 0
    while (left <= right) {
        mid = left + Math.floor((right - left) / 2)
        if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid - 1
        } else {
            return mid
        }
    }
    return -1
}


// 二分查找有几种写法？它们的区别是什么？
// https://www.zhihu.com/question/36132386/answer/530313852
function search2(nums, target) {
    let left = 0, right = nums.length, mid = 0
    while (left < right) {
        mid = left + Math.floor((right - left) / 2)
        if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return nums[left] === target ? left : -1
}