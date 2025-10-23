package main

import (
	"fmt"
)

type Person struct {
	Id   int    `json:"id"`
	Name string // 大写的才可以到导出
	city string
	Age  int8
}

func (p *Person) Sing() {
	fmt.Printf("%s is singing\n", p.Name)
}

type Dog struct{}

func (p *Dog) Sing() {
	fmt.Println("Dog is singing")
}

type Singer interface {
	Sing()
}

func Sing(s Singer) {
	s.Sing()
}

func main() {

	p := &Person{
		Name: "哈哈",
	}
	Sing(p)
}
