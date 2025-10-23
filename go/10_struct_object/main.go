package main

import "fmt"

type Person struct {
	name, city string
	age        int8
}

func NewPerson(name, city string) *Person {
	return &Person{
		name: name,
		city: city,
	}
}
func (p Person) Dream() {
	fmt.Printf("%s的梦想是学好Go\n", p.name)
}
func (p Person) SetAge(age int8) {
	p.age = age
}
func (p *Person) SetAge2(age int8) {
	p.age = age
}

func main() {
	p := NewPerson("小强", "南京")
	p.Dream()
	p.SetAge(10) // 值传递
	fmt.Printf("%#v\n", p)
	p.SetAge2(10) // 指针传递
	fmt.Printf("%#v\n", p)
}
