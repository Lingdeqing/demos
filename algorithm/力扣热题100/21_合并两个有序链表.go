package main

type ListNode3 struct {
	Val  int
	Next *ListNode3
}

func mergeTwoLists(list1 *ListNode3, list2 *ListNode3) *ListNode3 {
	dummy := &ListNode3{0, nil}
	p := dummy
	for list1 != nil && list2 != nil {
		if list1.Val < list2.Val {
			p.Next = list1
			list1 = list1.Next
		} else {
			p.Next = list2
			list2 = list2.Next
		}
		p = p.Next
	}
	if list1 != nil {
		p.Next = list1
	} else {
		p.Next = list2
	}
	return dummy.Next
}
