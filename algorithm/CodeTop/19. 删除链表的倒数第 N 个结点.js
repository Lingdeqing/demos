// 19. 删除链表的倒数第 N 个结点
// https://leetcode.cn/problems/remove-nth-node-from-end-of-list/

function removeNthFromEnd(head, n) {
    let dummy = { next: head }, slow = dummy, fast = dummy;
    while (n-- >= 0) fast = fast.next;
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next
    return dummy.next
}