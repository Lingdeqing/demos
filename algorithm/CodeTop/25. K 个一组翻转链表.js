// 25. K 个一组翻转链表
// https://leetcode.cn/problems/reverse-nodes-in-k-group/

function reverseKGroup(head, k) {
    if (!head) return null;
    let p = head
    for (let i = 0; i < k; i++) {
        if (!p) return head
        p = p.next;
    }
    const newHead = reverse(head, p)
    head.next = reverseKGroup(p, k)
    return newHead
}
// 1->2->3->4->5, 3
// 反转后  <-1<-2 3->4->5
function reverse(head, end) {
    let prev = null, cur = head, next = null;
    while (cur !== end) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next
    }
    return prev
}
// function reverse(head) {
//     let prev = null, cur = head, next = null;
//     while (cur) {
//         next = cur.next;
//         cur.next = prev;
//         prev = cur;
//         cur = next
//     }
//     return prev
// }