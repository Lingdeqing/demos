package main

import (
	"fmt"
)

type Mover interface {
	Move()
}

// Dog 狗结构体类型
type Dog struct {
	Pos int
}

// Move 使用值接收者定义Move方法实现Mover接口
func (d Dog) Move() {
	d.Pos++
	fmt.Println("狗会动")
}

type Mover2 interface {
	Move()
}

// Cat 狗结构体类型
type Cat struct {
	Pos int
}

// Move 使用指针接收者定义Move方法实现Mover接口
func (d *Cat) Move() {
	d.Pos++
	fmt.Println("猫会动")
}

func main() {

	// 值接收
	var x Mover

	var d1 = Dog{}
	x = d1
	x.Move()
	fmt.Printf("%#v\n", d1)
	fmt.Printf("%#v\n", x)

	var d2 = &Dog{}
	x = d2
	x.Move()
	fmt.Printf("%#v\n", d2)
	fmt.Printf("%#v\n", x)

	// 指针接收
	var y Mover2
	var c1 = &Cat{}
	y = c1
	y.Move()
	fmt.Printf("%#v\n", c1)
	fmt.Printf("%#v\n", y)

	var c2 = Cat{}
	// y = c2 // go编译器只会主动给你补 *d2 而不补 &c2
	y = &c2
	y.Move()
	fmt.Printf("%#v\n", c2)
	fmt.Printf("%#v\n", y)
}
