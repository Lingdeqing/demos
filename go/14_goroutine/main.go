package main

import (
	"fmt"
	"time"
)

func hello() {
	fmt.Println("hello")
}

func main() {
	go hello()

	go func() {
		fmt.Println("匿名函数")
	}()

	fmt.Println("你好")

	time.Sleep(time.Second)
}
