package main

import (
	"encoding/json"
	"fmt"
)

type Person struct {
	Id   int    `json:"id"`
	Name string // 大写的才可以到导出
	city string
	Age  int8
}

func main() {
	p := &Person{
		Id:   10,
		Name: "哈哈哈",
		city: "北京",
	}

	// 序列化
	jsonStr, err := json.Marshal(p)
	if err != nil {
		fmt.Println("序列化失败")
		return
	}
	fmt.Println(jsonStr)
	fmt.Printf("%s\n", jsonStr)

	// 反序列化
	str := `{"id":10,"Age":20,"Name":"呵呵"}`
	p2 := &Person{}
	err = json.Unmarshal([]byte(str), p2)
	if err != nil {
		fmt.Println("反序列化失败")
		return
	}
	fmt.Printf("%#v\n", p2)
}
