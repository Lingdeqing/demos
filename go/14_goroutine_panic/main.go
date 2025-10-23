package main

import (
	"fmt"
	"time"
)

func main() {
	f1()
}

func f1() {
	defer func() {
		if e := recover(); e != nil {
			fmt.Printf("recover outer panic:%v\n", e)
		}
	}()

	// 开启一个goroutine执行任务
	go func() {
		defer func() {
			if e := recover(); e != nil { // goroutine的panic只能goroutine自己处理
				fmt.Printf("recover outer panic:%v\n", e)
			}
		}()

		fmt.Println("in goroutine....")
		// 只能触发当前goroutine中的defer
		panic("panic in goroutine")
	}()

	time.Sleep(time.Second)
	fmt.Println("exit")
}
