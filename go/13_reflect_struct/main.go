package main

import (
	"fmt"
	"reflect"
)

type student struct {
	Name  string `json:"name"`
	Score int    `json:"score"`
}

func (s student) Study() string {
	msg := "好好学习，天天向上。"
	fmt.Println(msg)
	return msg
}

func (s *student) Sleep() string {
	msg := "好好睡觉，快快长大。"
	fmt.Println(msg)
	return msg
}

func main() {
	s := student{
		Name:  "小红",
		Score: 90,
	}

	t := reflect.TypeOf(s)
	fmt.Println(t.Name(), t.Kind())

	// 遍历属性
	for i := 0; i < t.NumField(); i++ {
		fmt.Println(t.Field(i).Name, t.Field(i).Index, t.Field(i).Type, t.Field(i).Tag.Get("json"))
	}
	if scoreField, ok := t.FieldByName("Score"); ok {
		fmt.Println(scoreField.Name, scoreField.Index, scoreField.Type, scoreField.Tag.Get("json1"))
	}

	// 遍历方法
	v := reflect.ValueOf(s)
	for i := 0; i < v.NumMethod(); i++ {
		fmt.Println(t.Method(i).Name, t.Method(i).Index, t.Method(i).Type)

		//调用方法
		v.Method(i).Call([]reflect.Value{})
	}

}
