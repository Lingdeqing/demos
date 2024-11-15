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


// 合并后，找中位数
function findMedianSortedArrays(nums1, nums2) {
    let nums3 = []
    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            nums3.push(nums1[i++])
        } else {
            nums3.push(nums2[j++])
        }
    }
    while (i < nums1.length) {
        nums3.push(nums1[i++])
    }
    while (j < nums2.length) {
        nums3.push(nums2[j++])
    }
    if (nums3.length % 2 === 0) {
        return (nums3[Math.floor(nums3.length / 2)] + nums3[Math.floor(nums3.length / 2) + 1]) / 2
    }
    return nums3[Math.floor(nums3.length / 2)]
}

// 用两个指针，不合并，找中位数
// 空间复杂度为0
function findMedianSortedArrays(nums1, nums2) {
    let i = 0, j = 0, k = 0, cur = 0, prev = 0
    const len = nums1.length + nums2.length
    const mid = Math.floor(len / 2)

    while (i < nums1.length || j < nums2.length) {
        if (i === nums1.length) {
            cur = nums2[j]
            j++
        } else if (j === nums2.length) {
            cur = nums1[i]
            i++
        } else if (nums1[i] <= nums2[j]) {
            cur = nums1[i]
            i++
        } else {
            cur = nums2[j]
            j++
        }
        if (k === mid) {
            break
        }
        k++
        prev = cur
    }
    return len % 2 === 0 ? (prev + cur) / 2 : cur
}


// 寻找中位数问题转换为寻找两个有序数组中第k小的数字
// 有序数组长度为偶数时 k=(nums1.length+nums2.length)/2
// 有序数组长度为奇数时 
function findMedianSortedArrays(nums1, nums2) {
    const len = nums1.length + nums2.length
    const mid = Math.floor(len / 2)
    if (len % 2 === 1) return getKthElement(nums1, nums2, mid + 1)
    return (getKthElement(nums1, nums2, mid) + getKthElement(nums1, nums2, mid + 1)) / 2
}
// k从1开始
// 找到nums1和nums2两个有序数组中第k小的数（本质就是 二分法查找两个有序数组合并后的第k个小的元素。理解了这个就很容易解决了。copy官方代码 附带详细注释）
// 思路 https://leetcode.cn/problems/median-of-two-sorted-arrays/solutions/258842/xun-zhao-liang-ge-you-xu-shu-zu-de-zhong-wei-s-114/?envType=featured-list&envId=2cktkvj
// 比较 A[k/2−1] 和 B[k/2−1]
//      由于 A[k/2−1] 和 B[k/2−1] 的前面分别有 A[0 .. k/2−2] 和 B[0 .. k/2−2]，即 k/2−1 个元素，对于 A[k/2−1] 和 B[k/2−1] 中的较小值，最多只会有 (k/2−1)+(k/2−1)≤k−2 个元素比它小，那么它就不能是第 k 小的数了。
function getKthElement(nums1, nums2, k) {
    let i = 0, j = 0
    while (true) {
        if (i === nums1.length) return nums2[j + k - 1]
        if (j === nums2.length) return nums1[i + k - 1]
        if (k === 1) return Math.min(nums1[i], nums2[j])

        const mid = Math.floor(k / 2) - 1
        const ii = Math.min(nums1.length - 1, i + mid)
        const jj = Math.min(nums2.length - 1, j + mid)
        if (nums1[ii] <= nums2[jj]) {
            k = k - (ii - i + 1);
            i = ii + 1;
        } else {
            k = k - (jj - j + 1);
            j = jj + 1;
        }
    }
}

console.log(findMedianSortedArrays([1, 3], [2]))