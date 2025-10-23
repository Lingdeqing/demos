package main

import (
	"fmt"
	"math"
	"strings"
)

var n bool = false   // 全部变量n
var m = 1            // 类型自动推导
const pi = 3.1415926 // 常量

func main() {
	p := 2   // 短变量声明，只能用在函数里
	n = true // 全部变量n
	fmt.Println(p)
	fmt.Println(m)
	fmt.Println(n)

	_, q := foo() // _: 匿名变量（哑元变量）
	fmt.Println(q)

	// 批量声明
	const (
		n1 = 1
		n2
	)
	fmt.Println(n1)
	fmt.Println(n2)
	var (
		m1 string
		m2 int
	)
	fmt.Println(m1)
	fmt.Println(m2)

	// 批量初始化
	const p1, p2 = 1, 2
	fmt.Println(p1)
	fmt.Println(p2)

	// iota 常量计数器
	const (
		q1 = iota
		q2
		_
		q4
	)
	fmt.Println(q1)
	fmt.Println(q2)
	fmt.Println(q4)

	const (
		_  = iota
		KB = 1 << (10 * iota)
		MB = 1 << (10 * iota)
		GB = 1 << (10 * iota)
		TB = 1 << (10 * iota)
		PB = 1 << (10 * iota)
	)
	fmt.Println(KB)

	var a int = 10
	fmt.Printf("%d \n", a)
	fmt.Printf("%b \n", a) // 打印二进制
	var b int = 077        // 八进制
	fmt.Printf("%o \n", b)
	var c int = 0xff // 十六进制
	fmt.Printf("%x \n", c)

	// 打印小数
	fmt.Printf("%f\n", math.Pi)
	fmt.Printf("%.2f\n", math.Pi)

	// 打印复数
	var c1 complex64 = 1 + 2i
	fmt.Println(c1)

	// 打印多行字符串
	fmt.Println(`
	多行字符串1
	多行字符串2
	`)
	fmt.Println(len("字符串长度"))

	// 字符串方法
	fmt.Println(strings.Split("a|b|c", "|"))
	fmt.Println(strings.Contains("a|b|c", "|"))

	// 单个字符
	var ch = '子'
	fmt.Println(ch)

	// 遍历字符串
	s := "hello中国"
	for i := 0; i < len(s); i++ { // byte数组
		fmt.Printf("%v(%c)", s[i], s[i])
	}
	fmt.Println()
	for _, r := range s { //rune
		fmt.Printf("%v(%c)", r, r)
	}
	fmt.Println()

	// 修改字符串
	s1 := "big"
	byteS1 := []byte(s1) // 强制类型转换
	byteS1[0] = 'p'
	println(string(byteS1))


	s2 := "中国"
	byteS2 := []rune(s2) // 强制类型转换
	byteS2[0] = '美'
	println(string(byteS2))

}

func foo() (int, string) {
	return 12, "Qab"
}
