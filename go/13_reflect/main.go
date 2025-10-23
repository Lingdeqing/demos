package main

import (
	"fmt"
	"reflect"
)

func main() {
	// type
	var a float32 = 32
	var t = reflect.TypeOf(a)
	fmt.Printf("%v\n", t)
	fmt.Printf("%v\n", reflect.TypeOf(32))
	fmt.Printf("%v\n", reflect.TypeOf(3.2))

	// type and kind
	type MyInt int64
	var b *float32
	var c MyInt
	var d int64
	fmt.Printf("type: %v, kind: %v\n", reflect.TypeOf(b).Name(), reflect.TypeOf(b).Kind())
	fmt.Printf("type: %v, kind: %v\n", reflect.TypeOf(c).Name(), reflect.TypeOf(c).Kind())
	fmt.Printf("type: %v, kind: %v\n", reflect.TypeOf(d).Name(), reflect.TypeOf(d).Kind())

	type Person struct {
		name string
		age  int
	}
	type Book struct {
		title string
	}

	var person = Person{
		name: "沙河小王子",
		age:  18,
	}
	var book = Book{
		title: "《跟小王子学Go语言》",
	}
	fmt.Printf("type: %v, kind: %v\n", reflect.TypeOf(person).Name(), reflect.TypeOf(person).Kind())
	fmt.Printf("type: %v, kind: %v\n", reflect.TypeOf(book).Name(), reflect.TypeOf(book).Kind())

	// 读取value
	reflectVal(32)
	reflectVal(3.2)

	e := 32
	fmt.Printf("type e: %T\n", reflect.ValueOf(e))
	fmt.Printf("type e: %T\n", int(reflect.ValueOf(e).Int()))

	// 修改value
	var f int64 = 64
	setReflectVal(&f)
	fmt.Printf("value f: %d\n", f)

	setReflectVal2(&f)
	fmt.Printf("value f: %d\n", f)

	// 判断
	var g *int
	fmt.Println("var g *int IsNil:", reflect.ValueOf(g).IsNil())
	fmt.Println("nil IsValid:", reflect.ValueOf(nil).IsValid())

	h := struct {
		def string
	}{}
	fmt.Println("h.abc IsValid:", reflect.ValueOf(h).FieldByName("abc").IsValid())
	fmt.Println("h.abc() IsValid:", reflect.ValueOf(h).MethodByName("abc").IsValid())
	fmt.Println("h.def IsValid:", reflect.ValueOf(h).FieldByName("def").IsValid())

	i := map[string]int{
		"def": 1,
	}
	fmt.Println("i['abc'] IsValid:", reflect.ValueOf(i).MapIndex(reflect.ValueOf("abc")).IsValid())
	fmt.Println("i['def'] IsValid:", reflect.ValueOf(i).MapIndex(reflect.ValueOf("def")).IsValid())

}

func reflectVal(x interface{}) {
	v := reflect.ValueOf(x)
	t := reflect.TypeOf(x)
	switch t.Kind() {
	case reflect.Float32:
		fmt.Printf("%f\n", float32(v.Float()))
	case reflect.Float64:
		fmt.Printf("%f\n", float64(v.Float()))
	case reflect.Int:
		fmt.Printf("%d\n", int(v.Int()))
	}
}

func setReflectVal(x interface{}) {
	v := reflect.ValueOf(x)
	if v.Kind() == reflect.Int64 {
		v.SetInt(100)
	}
}

func setReflectVal2(x interface{}) {
	v := reflect.ValueOf(x)
	if v.Elem().Kind() == reflect.Int64 {
		v.Elem().SetInt(100)
	}
}
