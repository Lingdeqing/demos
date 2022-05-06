/**
    题目：
        统计一个数字在排序数组中出现的次数。
 */

// time: 
// space: 
// 二分查找-边界
function search(nums, target) {

    function searchLeftBorder(nums, target) {
        let low = 0, high = nums.length - 1;
        while (low <= high) {
            const middle = low + ~~((high - low) / 2)
            if (nums[middle] > target) {
                high = middle - 1;
            } else if (nums[middle] < target) {
                low = middle + 1
            } else {
                high = middle - 1
            }
        }
        return nums[high + 1] === target ? high + 1 : -1
    }

    function searchRightBorder(nums, target) {
        let low = 0, high = nums.length - 1;
        while (low <= high) {
            const middle = low + ~~((high - low) / 2)
            if (nums[middle] > target) {
                high = middle - 1;
            } else if (nums[middle] < target) {
                low = middle + 1
            } else {
                low = middle + 1
            }
        }
        return nums[low - 1] === target ? low - 1 : -1
    }

    const leftBorder = searchLeftBorder(nums, target)
    if (leftBorder === -1) return 0 // 不存在
    const rightBorder = searchRightBorder(nums, target)
    return rightBorder - leftBorder + 1
}

// 二分查找-边界 优化
function search(nums, target) {

    let low = 0, high = nums.length - 1;
    while (low <= high) {
        const middle = low + ~~((high - low) / 2)
        if (nums[middle] > target) {
            high = middle - 1;
        } else if (nums[middle] < target) {
            low = middle + 1
        } else {
            high = middle - 1
        }
    }

    // 左边界找到了
    const lowBorder = high + 1
    if (nums[lowBorder] === target) {
        //从左边界出发寻找右边界
        low = lowBorder, high = nums.length - 1;
        while (low <= high) {
            const middle = low + ~~((high - low) / 2)
            if (nums[middle] > target) {
                high = middle - 1;
            } else if (nums[middle] < target) {
                low = middle + 1
            } else {
                low = middle + 1
            }
        }
        const highBorder = low - 1
        return highBorder - lowBorder + 1
    }
    return 0
}

// 二分查找
function search(nums, target) {
    let low = 0, high = nums.length - 1;
    while (low <= high) {
        const middle = low + ~~((high - low) / 2)
        if (nums[middle] > target) {
            high = middle - 1;
        } else if (nums[middle] < target) {
            low = middle + 1
        } else {
            // 找到，统计数量
            let result = 1;
            // 向左查
            let k = middle - 1;
            while (k < nums.length && nums[k] === target) {
                result++
                k--;
            }
            // 向右查
            k = middle + 1;
            while (k < nums.length && nums[k] === target) {
                result++
                k++;
            }
            return result
        }
    }
    return 0
}


