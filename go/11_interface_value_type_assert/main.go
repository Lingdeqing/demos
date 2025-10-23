package main

import "fmt"

type Mover interface {
	Move()
}

type Dog struct {
	Name string
}

func (d *Dog) Move() {
	fmt.Println("狗在跑~")
}

type Car struct {
	Brand string
}

func (c *Car) Move() {
	fmt.Println("汽车在跑~")
}

func main() {

	var m Mover

	m = &Dog{Name: "旺财"}
	fmt.Printf("%T\n", m) // *main.Dog

	m = new(Car)
	fmt.Printf("%T\n", m) // *main.Car

	var n Mover = &Dog{Name: "旺财"}
	v, ok := n.(*Dog)
	if ok {
		fmt.Println("类型断言成功")
		v.Name = "富贵" // 变量v是*Dog类型
	} else {
		fmt.Println("类型断言失败")
	}

	justifyType(n)

	// var _ Mover = (*Cat)(nil)
}

// justifyType 对传入的空接口类型变量x进行类型断言
func justifyType(x interface{}) {
	switch v := x.(type) {
	case string:
		fmt.Printf("x is a string，value is %v\n", v)
	case int:
		fmt.Printf("x is a int is %v\n", v)
	case bool:
		fmt.Printf("x is a bool is %v\n", v)
	case *Dog:
		fmt.Printf("x is a *Dog is %v\n", v)
	case Dog:
		fmt.Printf("x is a Dog is %v\n", v)
	default:
		fmt.Println("unsupport type！")
	}
}
