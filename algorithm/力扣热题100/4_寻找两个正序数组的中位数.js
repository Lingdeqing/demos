function findMedianSortedArrays(nums1, nums2) {
    const len = nums1.length + nums2.length
    if (len % 2 === 0) return (findKth(nums1, nums2, len >> 1) + findKth(nums1, nums2, (len >> 1) + 1)) / 2
    return findKth(nums1, nums2, (len >> 1) + 1)
}
// 寻找nums1, nums2中第k小的数，k从1开始
function findKth(nums1, nums2, k) {
    let i = 0, j = 0;
    while (true) {
        if (i >= nums1.length) return nums2[j + k - 1]
        if (j >= nums2.length) return nums1[i + k - 1]
        if (k === 1) return Math.min(nums1[i], nums2[j])

        // https://leetcode.cn/problems/median-of-two-sorted-arrays/solutions/258842/xun-zhao-liang-ge-you-xu-shu-zu-de-zhong-wei-s-114/?envType=featured-list&envId=2cktkvj
        // 对于 nums1[k/2-1] 和 nums2[k/2-1] 中较小的，最多nums1[0...k/2-2]和nums2[0...k/2-2]都小于它
        // 因而最多(k/2-1)*2=k-2个元素小于它，因而它不是第k小的，可以排除
        // k从1开始，mid的k从2开始，则k/2-1最小为0。k从0开始，mid的k从1开始，k/2-1最小为-1不合法。所以k从1开始，前面要再特殊处理下k=1的情况
        const mid = (k >> 1) - 1
        const ii = Math.min(nums1.length - 1, i + mid)
        const jj = Math.min(nums2.length - 1, j + mid)
        if (nums1[ii] < nums2[jj]) {
            // 排除[i, ii]
            k -= ii - i + 1
            i = ii + 1
        } else {
            // 排除[j, jj]
            k -= jj - j + 1
            j = jj + 1
        }
    }
}

console.log(findMedianSortedArrays([1, 3], [2]))