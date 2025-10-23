package main

import (
	"fmt"
	"strconv"
	"sync"
)

// 并发安全的map
var m = sync.Map{}

func main() {
	wg := sync.WaitGroup{}
	defer wg.Wait()

	for i := 0; i < 10; i++ {
		wg.Add(1)
		go func(i int) {
			defer wg.Done()
			key := strconv.Itoa(i)
			m.Store(key, i)
			val, _ := m.Load(key)
			fmt.Printf("k=%v, v=%v\n", key, val)
		}(i)
	}
}
