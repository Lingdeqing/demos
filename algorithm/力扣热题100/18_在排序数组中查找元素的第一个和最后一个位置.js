// 34. 在排序数组中查找元素的第一个和最后一个位置

function searchRange(nums, target) {
    function searchLeft(nums, target) {
        let left = 0, right = nums.length - 1;
        while (left <= right) {
            const mid = left + ~~((right - left) / 2)
            if (nums[mid] < target) {
                left = mid + 1;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                right = mid - 1;
            }
        }
        return nums[right + 1] === target ? right + 1 : -1
    }

    function searchRight(nums, target) {
        let left = 0, right = nums.length - 1;
        while (left <= right) {
            const mid = left + ~~((right - left) / 2)
            if (nums[mid] < target) {
                left = mid + 1;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return nums[left - 1] === target ? left - 1 : -1
    }
    return [searchLeft(nums, target), searchRight(nums, target)]
}
