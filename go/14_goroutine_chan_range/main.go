package main

import (
	"fmt"
	"sync"
)

var wg sync.WaitGroup

func hello(ch chan int) {
	for { // 死循环
		v, ok := <-ch
		if !ok {
			fmt.Println("通道已关闭")
			break
		}

		fmt.Println(v)

	}
	wg.Done() // 告知当前goroutine完成
}

func hello2(ch chan int) {
	for v := range ch {
		fmt.Println(v)
	}
	wg.Done() // 告知当前goroutine完成
}

func hello3(ch <-chan int) {
	for v := range ch {
		fmt.Println(v)
	}
	wg.Done() // 告知当前goroutine完成
}

func main() {

	// 接收多个值
	ch := make(chan int, 1)

	wg.Add(1)
	go hello(ch)

	ch <- 100
	ch <- 200
	close(ch)

	// for range
	ch2 := make(chan int, 1)

	wg.Add(1)
	go hello2(ch2)

	ch2 <- 100
	ch2 <- 200
	close(ch2)

	// 单向通道
	ch3 := make(chan int, 1)

	wg.Add(1)
	go hello3(ch3)

	ch3 <- 100
	ch3 <- 200
	close(ch3)

	wg.Wait()
}
