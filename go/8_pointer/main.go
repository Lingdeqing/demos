package main

import "fmt"

func main() {

	// 指针
	a := 2
	b := &a
	fmt.Printf("a:%d, ptr:%p\n", a, &a)
	fmt.Printf("b:%p, type:%T, b addr:%p, a:%d\n", b, b, &b, *b)
	fmt.Println(b)
	fmt.Println(*b)

	// 函数指针参数
	c := 10
	modify1(c)
	fmt.Println(c)
	modify2(&c)
	fmt.Println(c)

	// 指针变量未指向或者未初始化会panic
	// var d *int
	// *d = 100

	// new 初始化指针指向内存
	var d *int = new(int)
	*d = 200
	fmt.Println(*d)

	// make函数用来初始化map,slice,channel，这三者就是引用类型，没必要返回指针，
	// 引用类型未初始化直接用会panic
	// var m map[string]int
	// m["哈哈"] = 1

	var m map[string]int
	m = make(map[string]int)
	m["哈哈"] = 1
	fmt.Println(m)
}

func modify1(a int) {
	a = 100
}
func modify2(a *int) {
	*a = 100
}
