package main

import "fmt"

func main() {
	// if
	if score := 60; score >= 90 {
		fmt.Println("A")
	} else if score >= 80 {
		fmt.Println("B")
	} else {
		fmt.Println("C")
	}

	// for
	for i := 0; i < 10; i++ {
		fmt.Println(i)
	}

	// 无限循环
	j := 0
	for {
		j++
		if j >= 10 {
			break
		}
	}

	// for range
	for range 2 {
		fmt.Println("重复两次")
	}

	// switch
	k := 10
	switch k {
	case 1:
		fmt.Println("是1")
	case 2, 4, 6, 8:
		fmt.Println("偶数")
	case 10:
		fmt.Println("是2")
		fallthrough
	default:
		fmt.Println("default")
	}

	score := 60
	switch {
	case score >= 90:
		fmt.Println("A")
	case score >= 60:
		fmt.Println("B")
	}
}
