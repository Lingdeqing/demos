// https://leetcode.cn/problems/median-of-two-sorted-arrays/

// 寻找第k小的数
function findMedianSortedArrays(nums1, nums2) {
    const len = nums1.length + nums2.length
    if (len % 2 === 0) {
        return (getKth(nums1, nums2, len / 2 - 1) + getKth(nums1, nums2, len / 2)) / 2
    } else {
        return getKth(nums1, nums2, ~~(len / 2))
    }
}

// k从0开始
function getKth(nums1, nums2, k) {
    let i = 0, j = 0;
    while (true) {
        if (i >= nums1.length) {
            return nums2[j + k]
        }
        if (j >= nums2.length) {
            return nums1[i + k]
        }
        if (k === 0) {
            return Math.min(nums1[i], nums2[j])
        }

        const mid = ~~((1 + k) / 2) // 还剩k+1个
        const newI = mid + i >= nums1.length ? nums1.length - 1 : mid + i - 1;
        const newJ = mid + j >= nums2.length ? nums2.length - 1 : mid + j - 1;
        if (nums1[newI] <= nums2[newJ]) {
            k = k - (newI - i + 1)
            i = newI + 1
        } else {
            k = k - (newJ - j + 1)
            j = newJ + 1
        }
    }
}
