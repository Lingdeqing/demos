package main

import "fmt"

type Any interface{}

func main() {
	// var x Any // any类型
	var x interface{} // 字面量

	x = "哈哈"
	fmt.Println(x)

	x = 100
	show(x)

	y := make(map[string]interface{}, 10)
	y["呵呵"] = 1
	y["呵呵1"] = "哈哈和"
	fmt.Println(y)

}

func show(a interface{}) {
	fmt.Println(a)
}
