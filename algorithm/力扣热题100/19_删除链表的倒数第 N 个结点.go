package main

type ListNode2 struct {
	Val  int
	Next *ListNode2
}

func removeNthFromEnd(head *ListNode2, n int) *ListNode2 {
	dummy := &ListNode2{
		Val:  0,
		Next: nil,
	}
	fast := dummy
	slow := dummy
	n++
	for n > 0 && fast != nil {
		n--
		fast = fast.Next
	}
	for fast != nil {
		fast = fast.Next
		slow = slow.Next
	}
	slow.Next = slow.Next.Next
	return dummy.Next
}
