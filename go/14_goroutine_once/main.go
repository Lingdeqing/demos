package main

import (
	"fmt"
	"sync"
)

var (
	once sync.Once
)

func loadImage() {
	fmt.Println("加载图片")
}

func show() {
	once.Do(loadImage)
	fmt.Println("显示图片")
}
func main() {
	show()
	show()
	show()
}
