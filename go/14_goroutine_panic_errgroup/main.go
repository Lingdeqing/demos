package main

import (
	"fmt"
	"net/http"

	"golang.org/x/sync/errgroup"
)

func main() {
	fetchUrlDemo()
}

func fetchUrlDemo() error {
	g := new(errgroup.Group)
	urls := []string{
		"http://pkg.go.dev",
		"http://www.liwenzhou.com",
		"http://www.yixieqitawangzhi.com",
	}
	for _, url := range urls {
		_url := url
		g.Go(func() error {
			resp, err := http.Get(_url)
			if err == nil {
				fmt.Printf("获取%s成功\n", _url)
				resp.Body.Close()
			}
			return err // 返回错误
		})
	}

	if err := g.Wait(); err != nil {
		// 处理可能出现的错误
		fmt.Println("出错了", err)
		return err
	}
	fmt.Println("所有goroutine均成功")
	return nil

}
