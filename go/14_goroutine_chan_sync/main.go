package main

import (
	"fmt"
	"sync"
)

var wg sync.WaitGroup

func hello(ch chan int) {
	data := <-ch // 接收数据
	fmt.Println("hello", data)
	wg.Done() // 告知当前goroutine完成
}

func main() {
	var ch chan int
	fmt.Println(ch)

	// ch = make(chan int) // 无缓冲通道(同步通道)
	// ch <- 100           // 没有人接收的话，会阻塞在这儿
	// fmt.Println("发送成功")

	ch = make(chan int)

	wg.Add(1)
	go hello(ch)

	ch <- 100 //发送数据

	close(ch) // 关闭通道

	wg.Wait()
}
