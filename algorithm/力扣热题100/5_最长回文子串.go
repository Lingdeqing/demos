package main

func longestPalindrome(s string) string {
	res := ""
	for i := 0; i < len(s); i++ {
		str := palindrome(s, i, i)
		if len(str) > len(res) {
			res = str
		}
		str = palindrome(s, i, i+1)
		if len(str) > len(res) {
			res = str
		}
	}
	return res
}

func palindrome(s string, i int, j int) string {
	for i >= 0 && j < len(s) && s[i] == s[j] {
		i--
		j++
	}
	return s[i+1 : j]
}
