package main

func isValid(s string) bool {
	m := map[byte]byte{
		'(': ')',
		'{': '}',
		'[': ']',
	}
	st := []byte{}
	for i := 0; i < len(s); i++ {
		if _, ok := m[s[i]]; ok {
			st = append(st, s[i])
		} else {
			if len(st) == 0 || m[st[len(st)-1]] != s[i] {
				return false
			}
			st = st[:len(st)-1]
		}
	}
	return len(st) == 0
}
