package main

func letterCombinations(digits string) []string {
	letterMap := map[byte]string{
		'2': "abc",
		'3': "def",
		'4': "ghi",
		'5': "jkl",
		'6': "mno",
		'7': "pqrs",
		'8': "tuv",
		'9': "wxyz",
	}

	path := []byte{}
	res := []string{}
	var bt func(start int)
	bt = func(start int) {
		if start >= len(digits) {
			res = append(res, string(path))
			return
		}

		cur := letterMap[digits[start]]
		for i := 0; i < len(cur); i++ {
			path = append(path, cur[i])
			bt(start + 1)
			path = path[:len(path)-1]
		}
	}
	bt(0)
	return res
}

// func main() {
// 	// findMedianSortedArrays([]int{1, 3}, []int{2})
// 	fmt.Println(letterCombinations("23"))
// }
