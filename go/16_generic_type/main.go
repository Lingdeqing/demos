package main

import "fmt"

// 函数泛型
func reverse[T any](s []T) []T {
	len := len(s)
	res := make([]T, len)
	for i, item := range s {
		res[len-i-1] = item
	}
	return res
}

// 类型泛型
type Slice[T int | string] []T
type Map[K int | string, V any] map[K]V
type Tree[T int | string] struct {
	left, right *Tree[T]
	value       T
}

func main() {
	fmt.Println(reverse([]int{1, 2, 3}))
	fmt.Println(reverse([]float64{1.2, 2.3, 3.4}))

	reverseInt := reverse[int]
	fmt.Println(reverseInt([]int{1, 2, 3}))

	var tree Tree[int] // 类型泛型使用必须实例化
	tree.value = 10
	tree.left = nil
	tree.right = nil
	fmt.Println(tree)

}
