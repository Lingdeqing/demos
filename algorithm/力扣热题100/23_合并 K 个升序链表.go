package main

type ListNode4 struct {
	Val  int
	Next *ListNode4
}

func mergeKLists(lists []*ListNode4) *ListNode4 {
	pq := NewMiniPriorityQueue[*ListNode4](func(a, b *ListNode4) bool {
		return a.Val < b.Val
	})

	dummy := &ListNode4{
		Next: nil,
	}
	p := dummy
	for _, list := range lists {
		if list != nil {
			pq.Enqueue(list)
		}
	}
	for !pq.IsEmpty() {
		node, ok := pq.Dequeue()
		if ok && node.Next != nil {
			pq.Enqueue(node.Next)
		}
		p.Next = node
		p = p.Next
	}

	return dummy.Next
}

type MiniPriorityQueue[T any] struct {
	pq      []T
	compare func(a T, b T) bool
}

func NewMiniPriorityQueue[T any](compare func(a T, b T) bool) *MiniPriorityQueue[T] {
	return &MiniPriorityQueue[T]{
		// pq: []T{
		// 	*new(T),
		// },
		pq:      make([]T, 1),
		compare: compare,
	}
}

func (o *MiniPriorityQueue[T]) IsEmpty() bool {
	return len(o.pq) <= 1
}
func (o *MiniPriorityQueue[T]) Left(index int) int {
	return index * 2
}
func (o *MiniPriorityQueue[T]) Right(index int) int {
	return index*2 + 1
}
func (o *MiniPriorityQueue[T]) Parent(index int) int {
	return index / 2
}

func (o *MiniPriorityQueue[T]) swim(index int) {
	for index >= 2 && o.compare(o.pq[index], o.pq[o.Parent(index)]) {
		temp := o.pq[index]
		o.pq[index] = o.pq[o.Parent(index)]
		o.pq[o.Parent(index)] = temp
		index = o.Parent(index)
	}
}
func (o *MiniPriorityQueue[T]) sink(index int) {

	for index < len(o.pq) {
		min := index
		if o.Left(index) < len(o.pq) && o.compare(o.pq[o.Left(index)], o.pq[min]) {
			min = o.Left(index)
		}
		if o.Right(index) < len(o.pq) && o.compare(o.pq[o.Right(index)], o.pq[min]) {
			min = o.Right(index)
		}
		if min == index {
			break
		}
		temp := o.pq[min]
		o.pq[min] = o.pq[index]
		o.pq[index] = temp
		index = min
	}
}
func (o *MiniPriorityQueue[T]) Enqueue(item T) {
	o.pq = append(o.pq, item)
	o.swim(len(o.pq) - 1)
}
func (o *MiniPriorityQueue[T]) Dequeue() (T, bool) {
	if o.IsEmpty() {
		return *new(T), false
	}
	res := o.pq[1]
	o.pq[1] = o.pq[len(o.pq)-1]
	o.pq = o.pq[:len(o.pq)-1]
	o.sink(1)
	return res, true
}
