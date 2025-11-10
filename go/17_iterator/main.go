package main

import (
	"fmt"
	"iter"
)

type Set[T comparable] struct {
	m map[T]struct{}
}

// 创建集合
func NewSet[T comparable]() *Set[T] {
	return &Set[T]{
		m: make(map[T]struct{}),
	}
}

// 添加元素
func (s *Set[T]) Add(v T) {
	s.m[v] = struct{}{}
}

// 遍历所有元素
func (s *Set[T]) All() iter.Seq[T] {
	return func(yield func(T) bool) {
		for v := range s.m {
			if !yield(v) {
				fmt.Println("遍历中断", v)
				return
			}
		}
	}
}

// 筛选元素
func (s *Set[T]) Filter(f func(T) bool) iter.Seq[T] {
	return func(yield func(T) bool) {
		for v := range s.m {
			if !f(v) {
				continue
			}
			if !yield(v) {
				return
			}
		}
	}
}

type Range struct {
	from int
	to   int
}

func (r *Range) RangePull() (next func() (int, bool), stop func()) {
	i := r.from - 1
	end := false
	next = func() (int, bool) {
		i++
		if end || i > r.to {
			return i, false
		}
		return i, true
	}
	stop = func() {
		end = true
	}
	return next, stop
}

func (r *Range) ForRange() iter.Seq[int] {
	return func(yield func(int) bool) {
		next, stop := r.RangePull()
		defer stop()
		for {
			v, ok := next()
			if !ok {
				return
			}

			if !yield(v) {
				return
			}
		}
	}
}

func main() {
	// 1. push迭代器 迭代器中主动调用yield将值传递给for/range
	s := NewSet[string]()
	s.Add("Golang")
	s.Add("Java")
	s.Add("Python")
	s.Add("C++")

	// go的迭代器和js有点差别，本质一样。go是迭代器里面反向的将值通过yield函数返回给迭代调用方，迭代调用方break或者中途return会使得yield返回false，迭代结束yield也会返回false
	for v := range s.All() {
		if v == "Java" {
			break
		}
		fmt.Println(v)
	}

	// 本质上迭代器是函数的组合，上面的for range等价于此处的yield函数
	s.All()(func(v string) bool {
		fmt.Println(v)
		return true
	})

	isTooLong := func(s string) bool {
		return len(s) > 4
	}
	for v := range s.Filter(isTooLong) {
		fmt.Println("这些长度大于4", v)
	}

	// 2. pull迭代器，类似于js了
	r := &Range{
		from: 1,
		to:   10,
	}
	for v := range r.ForRange() {
		fmt.Println(v)
	}

}
