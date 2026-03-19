// 88. 合并两个有序数组
// https://leetcode.cn/problems/merge-sorted-array/

function merge(nums1, m, nums2, n) {
    for (let i = m + n - 1, j = m - 1, k = n - 1; i >= 0; i--) {
        if (j >= 0 && k >= 0) {
            if (nums1[j] >= nums2[k]) {
                nums1[i] = nums1[j--]
            } else {
                nums1[i] = nums2[k--]
            }
        } else if (j >= 0) {
            nums1[i] = nums1[j--]
        } else if (k >= 0) {
            nums1[i] = nums2[k--]
        }
    }
    return nums1
}


function merge2(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, p = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] >= nums2[j]) {
            nums1[p--] = nums1[i--]
        } else {
            nums1[p--] = nums2[j--]
        }
    }
    while (j >= 0) nums1[p--] = nums2[j--]
    return nums1
}


console.log(merge([1, 2, 3, 0, 0, 0],
    3,
    [4, 5, 6],
    3))