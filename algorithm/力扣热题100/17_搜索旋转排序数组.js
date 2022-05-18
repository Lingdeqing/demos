// 33. 搜索旋转排序数组

// 直接二分
// 将数组一分为二，其中一定有一个是有序的，另一个可能是有序，也能是部分有序。
// 此时有序部分用二分法查找。无序部分再一分为二，其中一个一定有序，另一个可能有序，可能无序。就这样循环. 
function search(nums, target) {
    let left = 0, right = nums.length - 1
    while (left <= right) {
        const mid = left + ~~((right - left) / 2)
        if (nums[mid] === target) return mid;
        if (nums[mid] < nums[right]) {// [mid+1, right]有序
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else { // [left,mid-1]有序
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    }
    return -1
}

// 先找到旋转点
// 在对一半进行二分
function search(nums, target) {
    if (nums.length === 0) return -1

    // 找到旋转点
    let left = 0, right = nums.length - 1
    while (left <= right) {
        const mid = left + ~~((right - left) / 2)
        if (nums[mid] < nums[right]) {
            right = mid
        } else if (nums[mid] > nums[right]) {
            left = mid + 1
        } else {
            right = right - 1
        }
    }


    // left是旋转点
    if (left === 0) {// 未旋转
        right = nums.length - 1
    } else if (target < nums.at(-1)) {
        right = nums.length - 1
    } else if (target > nums.at(-1)) {
        right = left - 1
        left = 0
    } else {
        return nums.length - 1
    }
    while (left <= right) {
        const mid = left + ~~((right - left) / 2)
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

// 暴力
// O(n)
function search(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i
        }
    }
    return -1
}