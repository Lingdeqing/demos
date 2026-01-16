package main

func isMatch(s string, p string) bool {
	var dp func(int, int) bool
	dp = func(i int, j int) bool {
		if i >= len(s) {
			if j < len(p) {
				if (len(p)-j)%2 == 1 {
					return false
				}
				for j += 1; j < len(p); j += 2 {
					if p[j] != '*' {
						return false
					}
				}
			}
			return true
		}
		if j >= len(p) {
			return false
		}

		if s[i] == p[j] || p[j] == '.' {
			if j+1 < len(p) && p[j+1] == '*' {
				return dp(i+1, j) || dp(i, j+2)
			} else {
				return dp(i+1, j+1)
			}
		} else {
			if j+1 < len(p) && p[j+1] == '*' {
				return dp(i, j+2)
			}
			return false
		}
	}
	return dp(0, 0)
}
