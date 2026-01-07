package main

import (
	"fmt"
	"math"
)

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	length := len(nums1) + len(nums2)
	if length%2 == 0 {
		return float64(findKth(nums1, nums2, length/2)+findKth(nums1, nums2, length/2+1)) / float64(2)
	}
	return float64(findKth(nums1, nums2, length/2+1))
}
func findKth(nums1 []int, nums2 []int, k int) int {
	i := 0
	j := 0
	for {
		if i >= len(nums1) {
			return nums2[j+k-1]
		}
		if j >= len(nums2) {
			return nums1[i+k-1]
		}
		if k == 1 {
			return int(math.Min(float64(nums1[i]), float64(nums2[j])))
		}

		mid := k/2 - 1
		ii := int(math.Min(float64(len(nums1)-1), float64(i+mid)))
		jj := int(math.Min(float64(len(nums2)-1), float64(j+mid)))

		if nums1[ii] < nums2[jj] {
			k -= ii - i + 1
			i = ii + 1
		} else {
			k -= jj - j + 1
			j = jj + 1
		}
	}
}

func main() {
	// findMedianSortedArrays([]int{1, 3}, []int{2})
	a := 2
	b := 3
	fmt.Println(float64((a + b)) / float64(2))
}
