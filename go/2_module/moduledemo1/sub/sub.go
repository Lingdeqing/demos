package sub

import "fmt"

// 大写才可以被其他模块访问
func Hello() {
	fmt.Println("hello, sub")
}
