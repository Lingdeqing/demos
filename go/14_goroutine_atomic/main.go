package main

import (
	"fmt"
	"sync"
	"sync/atomic"
)

var (
	x  int32
	wg sync.WaitGroup
)

func add() {
	for i := 0; i < 5000; i++ {
		atomic.AddInt32(&x, 1) // 原子操作
	}
	wg.Done()
}
func main() {
	wg.Add(2)

	go add()
	go add()

	wg.Wait()
	fmt.Println(x)
}
