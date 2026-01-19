package main

import (
	"fmt"
	"sort"
)

func threeSum(nums []int) [][]int {
	// sort.Slice(nums, func(i, j int) bool {
	// 	return nums[i]-nums[j] < 0
	// })
	sort.Ints(nums)
	return nthSum(nums, 3, 0, 0)
}
func nthSum(nums []int, k int, start int, target int) [][]int {
	res := [][]int{}
	if k == 2 {
		i := start
		j := len(nums) - 1
		for i < j {
			leftNum := nums[i]
			rightNum := nums[j]
			sum := leftNum + rightNum
			if sum > target {
				j--
			} else if sum < target {
				i++
			} else {
				res = append(res, []int{
					leftNum,
					rightNum,
				})
				for i < len(nums) && leftNum == nums[i] {
					i++
				}
				for j >= 0 && rightNum == nums[j] {
					j--
				}
			}
		}
	} else {
		for i := start; i < len(nums); i++ {
			curNum := nums[i]
			subRes := nthSum(nums, k-1, i+1, target-curNum)

			for _, subArr := range subRes {
				res = append(res, append(subArr, curNum))
			}
			for i+1 < len(nums) && curNum == nums[i+1] {
				i++
			}
		}
	}
	return res
}

func main() {
	fmt.Println(threeSum([]int{
		-1, 0, 1, 2, -1, -4,
	}))
}
