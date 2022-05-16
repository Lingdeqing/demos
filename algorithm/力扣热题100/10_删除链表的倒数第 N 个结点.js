// 19. 删除链表的倒数第 N 个结点

function removeNthFromEnd(head, n) {
    let p = head, dummy = {
        next: head
    }, q = dummy;
    while (n--) {
        p = p.next
    }
    while (p) {
        p = p.next
        q = q.next
    }
    q.next = q.next.next
    return dummy.next
}