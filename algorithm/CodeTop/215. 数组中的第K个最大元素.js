// 215. 数组中的第K个最大元素
// https://leetcode.cn/problems/kth-largest-element-in-an-array/

// 快排
function findKthLargest(nums, k) {
    let res = 0;
    function quickSort(nums, left, right) {
        // if(left>=right) return 
        let i = left, j = right;
        while (i < j) {
            while (i < j && nums[j] <= nums[left]) j--;
            while (i < j && nums[i] >= nums[left]) i++;
            ;[nums[i], nums[j]] = [nums[j], nums[i]];
        }
        ;[nums[i], nums[left]] = [nums[left], nums[i]];

        if (i > k - 1) {
            quickSort(nums, left, i - 1)
        } else if (i < k - 1) {
            quickSort(nums, i + 1, right)
        } else {
            res = nums[i]
        }
    }
    quickSort(nums, 0, nums.length - 1)
    return res
}

// 堆排
function findKthLargest(nums, k) {

    for (let i = Math.floor(nums.length / 2 - 1); i >= 0; i--) {
        buildHeap(nums, i, nums.length)
    }

    for (let i = 1; i < k; i++) {
        ;[nums[0], nums[nums.length - i]] = [nums[nums.length - i], nums[0]];
        buildHeap(nums, 0, nums.length - i)
    }

    function buildHeap(nums, i, size) {
        let left = i * 2 + 1, right = i * 2 + 2, largeIndex = i;
        if (left < size && nums[left] > nums[largeIndex]) {
            largeIndex = left
        }
        if (right < size && nums[right] > nums[largeIndex]) {
            largeIndex = right
        }
        if (largeIndex !== i) {
            ;[nums[i], nums[largeIndex]] = [nums[largeIndex], nums[i]];
            buildHeap(nums, largeIndex, size)
        }
    }

    return nums[0]
}

