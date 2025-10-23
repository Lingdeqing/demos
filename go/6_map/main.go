package main

import (
	"fmt"
	"sort"
)

func main() {
	var m = make(map[int]string, 5)
	m[1] = "哈"
	m[5] = "呵"
	m[4] = "我"
	fmt.Println(m)
	fmt.Println(m[1])
	fmt.Println(m[2])
	fmt.Printf("type of m:%T\n", m)

	// key存在
	val, exist := m[6]
	fmt.Println(exist)
	fmt.Println(val)

	// 遍历
	for k, v := range m {
		fmt.Println(k)
		fmt.Println(v)
	}

	// 删除
	delete(m, 1)
	fmt.Println(m)

	// 遍历指定顺序
	var keys []int
	for k := range m {
		keys = append(keys, k)
	}
	sort.Ints(keys)
	for _, k := range keys {
		fmt.Println(m[k])
	}

	// key为map类型
	var mapSlice = make([]map[string]int, 5, 10)
	mapSlice[0] = make(map[string]int, 5)
	mapSlice[0]["哈哈"] = 1
	mapSlice[0]["呵呵"] = 2
	fmt.Println(mapSlice)

	// 值为map类型
	var sliceMap = make(map[string][]int, 5)
	sliceMap["哈哈"] = []int{1, 2, 3}
	fmt.Println(sliceMap)

}
