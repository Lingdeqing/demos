package main

import (
	"fmt"
	"sync"
)

var wg sync.WaitGroup

func hello(ch chan int) {
	data := <-ch
	fmt.Println("hello", data)
	wg.Done() // 告知当前goroutine完成
}

func main() {

	ch := make(chan int, 1) // 缓冲容量为1的通道

	wg.Add(1)
	go hello(ch)

	ch <- 100

	wg.Wait()
}
