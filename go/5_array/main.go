package main

import (
	"fmt"
	"sort"
)

func main() {

	var a [3]int
	var b = [4]int{1, 2, 3, 4}
	var c = [2]string{"hello", "world"}
	fmt.Println(a)
	fmt.Println(b)
	fmt.Println(c)

	var d = [...]int{1, 2}
	fmt.Println(len(d))
	fmt.Printf("typeof d: %T\n", d)

	// 长度自动推导
	var f = [...]int{1: 1, 3: 3}
	fmt.Println(len(f))
	fmt.Printf("typeof f: %T\n", f)

	// 遍历数组
	for i := 0; i < len(f); i++ {
		fmt.Println(f[i])
	}
	for _, val := range f {
		fmt.Println(val)
	}

	// 多维数组
	g := [3][2]string{
		{"hello", "word"},
		{"hello2", "word2"},
		{"hello3", "word3"},
	}
	for i := range g {
		for j := range g[i] {
			fmt.Println(g[i][j])
		}
	}

	// 数组是值类型，赋值或者传参是复制
	h := g
	h[0][0] = "hello1"
	fmt.Println(g)
	fmt.Println(h)

	k := double(b)
	fmt.Println(b)
	fmt.Println(k)

	// 切片
	var e = []int{1, 2}
	var l []int
	fmt.Println(len(e))
	fmt.Println(cap(e))
	fmt.Printf("typeof e: %T\n", e)
	fmt.Println(l == nil)

	var e2 = tripple(e)
	fmt.Println(e)
	fmt.Println(e2) // 切片是引用类型，赋值时只是复制引用，而不是复制引用指向的内容

	s1 := [5]int{1, 2, 3, 4, 5}
	s2 := s1[2:3] // 切片底层引用了数组，修改切片会影响底层的数组
	s2[0] = 6
	s2 = append(s2, 7, 8) // 在append容量没有超出底层数组时会同步修改底层数组
	s2 = append(s2, 7, 8) // 超出底层数组后，扩容会复制一个新的底层数组，后续的append就不会影响原来的数组了
	fmt.Println(s2)
	fmt.Println(s1)

	// 切片复制
	q1 := []int{1, 2, 3, 4, 5}
	var q2 = make([]int, 3)
	copy(q2, q1) // copy不会扩容，把q2容量填满为止
	q1[1] = 200
	fmt.Println(q2)
	fmt.Println(q1)

	// 删除元素
	p1 := []int{1, 2, 3, 4, 5}
	p1 = append(p1[:2], p1[3:]...)
	fmt.Println(p1)

	// 排序
	r1 := []int{3, 7, 8, 9, 1}
	sort.Slice(r1, func(i, j int) bool {
		return r1[i] > r1[j]
	})
	fmt.Println(r1)
}
func double(a [4]int) [4]int {
	r := a
	for i := range r {
		r[i] = 2 * r[i]
	}
	return r
}

func tripple(a []int) []int {
	r := a
	for i := range r {
		r[i] = 2 * r[i]
	}
	return r
}
