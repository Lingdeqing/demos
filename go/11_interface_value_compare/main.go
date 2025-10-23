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

	fmt.Println(m == nil) // true

	// m.Move() // panic: runtime error: invalid memory address or nil pointer dereference

	m = &Dog{Name: "旺财"}
	fmt.Println(m == nil) // false

	var c *Car
	m = c

	fmt.Println(m == nil) // false

	var (
		x Mover = new(Dog)
		y Mover = new(Car)
	)
	fmt.Println(x == y) // false

	// var z interface{} = []int{1, 2, 3}
	// fmt.Println(z == z) // panic: runtime error: comparing uncomparable type []int

}
