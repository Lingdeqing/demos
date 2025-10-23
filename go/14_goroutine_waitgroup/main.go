package main

import (
	"fmt"
	"sync"
)

var wg sync.WaitGroup

func hello() {
	fmt.Println("hello")
	wg.Done() // 告知当前goroutine完成
}

func hello2(i int) {
	defer wg.Done() // goroutine结束就登记-1
	fmt.Println("hello", i)
}

func main() {
	wg.Add(1) // 登记1个goroutine
	go hello()
	fmt.Println("你好")

	for i := 0; i < 10; i++ {
		wg.Add(1)
		go hello2(i)
	}

	wg.Wait() // 阻塞等待登记的goroutine完成
}
