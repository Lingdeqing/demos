package main

func twoSum(nums []int, target int) []int {
	m := map[int]int{}
	for index, num := range nums {
		if index2, ok := m[target-num]; ok {
			return []int{index2, index}
		}
		m[num] = index
	}
	return nil
}
