package main

import "fmt"

type NewInt int  // 类型
type MyInt = int //类型别名

func (p NewInt) plus(v int) int {
	return int(p) + v
}
func main() {

	var a NewInt
	var b MyInt
	fmt.Printf("typeof a:%T\n", a)
	fmt.Printf("typeof b:%T\n", b)

	// 类型扩展方法
	var c NewInt = 10
	fmt.Println(c.plus(2))
}
