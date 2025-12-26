package main

func lengthOfLongestSubstring(s string) int {
	win := map[byte]int{}
	i := 0
	j := 0
	res := 0
	for j < len(s) {
		ch := s[j]
		win[ch]++
		j++

		for i < len(s) && win[s[j-1]] > 1 {
			win[s[i]]--
			i++
		}

		if j-i > res {
			res = j - i
		}
	}
	return res
}

// func main() {
// 	fmt.Println(lengthOfLongestSubstring("abcabcbb"))
// }
