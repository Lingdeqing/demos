package main

func generateParenthesis(n int) []string {
	res := []string{}
	var bt func(start int, str string, score int)
	bt = func(start int, str string, score int) {
		if score < 0 || score > n {
			return
		}
		if start >= n*2 {
			if score == 0 {
				res = append(res, str)
			}
			return
		}

		bt(start+1, str+"(", score+1)
		bt(start+1, str+")", score-1)
	}
	bt(0, "", 0)
	return res
}
