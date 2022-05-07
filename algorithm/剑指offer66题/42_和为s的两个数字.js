/**
    题目：
        输入一个递增排序的数组和一个数字S，在数组中查找两个数，是的他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。
 */

// time: 
// space:
// 双指针
function twoSum(nums, target) {
    let i = 0, j = nums.length - 1, minProduct = null, res = null;
    while (i < j) {
        const sum = nums[i] + nums[j]
        if (sum < target) {
            i++
        } else if (sum > target) {
            j--
        } else {
            // found
            if (minProduct === null || minProduct > nums[i] * nums[j]) {
                minProduct = nums[i] * nums[j];
                res = [nums[i], nums[j]];
            }
            i++;
            j--;
        }
    }
    return res
}


function twoSum(nums, target) {
    let minProduct = null, res = null
    for (let i = 0; i < nums.length; i++) {

        // 二分搜索
        let low = 0, high = i - 1, t = target - nums[i];
        if (minProduct !== null && t * nums[i] > minProduct) continue; // 乘积比当前最小的乘积大，直接跳过
        while (low <= high) {
            const middle = low + ~~((high - low) / 2)
            if (nums[middle] > t) {
                high = middle - 1
            } else if (nums[middle] < t) {
                low = middle + 1
            } else {
                // found
                minProduct = t * nums[i]
                res = [t, nums[i]]
                break
            }
        }
    }
    return res
}