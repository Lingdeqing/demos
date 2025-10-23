package main

import (
	"errors"
	"fmt"
)

func Open() (*interface{}, error) {
	return nil, errors.New("无效的id")
}

func main() {
	_, err := Open()
	if err != nil {
		fmt.Println("打开文件失败,err:", err)
		err = fmt.Errorf("查询数据库失败，err:%v", err)
		fmt.Println(err)
		err = fmt.Errorf("查询数据库失败，err:%w", err)
		fmt.Println(err)
		err = errors.Unwrap(err)
		fmt.Println(err)
		// errors.Unwrap(err)
		// func Unwrap(err error) error                 // 获得err包含下一层错误
		// func Is(err, target error) bool              // 判断err是否包含target
		// func As(err error, target interface{}) bool  // 判断err是否为target类型

	}

}
