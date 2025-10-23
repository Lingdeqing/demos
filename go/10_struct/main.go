package main

import "fmt"

type Person struct {
	name, city string
	age        int8
}

func main() {
	var p1 Person
	p1.age = 10
	p1.name = "哈哈"
	fmt.Println(p1)
	fmt.Printf("%v\n", p1)
	fmt.Printf("%#v\n", p1)

	// 匿名结构体
	var user struct {
		name string
		age  int
	}
	user.age = 20

	var p2 = new(Person)
	fmt.Printf("%#v\n", p2) // p2是结构体指针
	(*p2).age = 10
	p2.name = "哈哈哈" // 结构体指针可以直接用.

	p3 := &Person{}
	fmt.Printf("%#v\n", p3)

	// 这样写是复制了一个对象
	// p6 := Person{
	// 	name: "呵呵呵",
	// }
	p6 := &Person{
		name: "呵呵呵",
	}
	fmt.Printf("%#v\n", p6)

	p7 := Person{
		name: "呵呵呵",
	}
	p8 := p7 // 复制
	p8.name = "哈哈哈"
	fmt.Printf("%#v\n", p7)
	fmt.Printf("%#v\n", p8)

}
