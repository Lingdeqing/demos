package main

import (
	"fmt"
)

type calculation func(int, int) (int, int)

func main() {
	// 可选参数
	fmt.Println(sum(1, 2, 3))

	// 函数类型
	var c calculation = calc
	fmt.Println(c(1, 2))

	// 函数作为参数
	fmt.Println(calc2(1, 2, calc))

	// 函数作为返回值，匿名函数，闭包
	var add = adder(2)
	fmt.Println(add(1))
	fmt.Println(add(1))
	fmt.Println(add(1))

	// 匿名函数自执行
	fmt.Println(func() int {
		return 10
	}())
}

func sum(x ...int) int {
	s := 0
	for _, i := range x {
		s += i
	}
	return s
}

func calc(a int, b int) (int, int) {
	return a + b, a - b
}

func calc2(a, b int, op func(a, b int) (int, int)) (int, int) {
	return op(a, b)
}

func adder(base int) func(int) int {
	return func(i int) int {
		base += i
		return base
	}
}
