/**
    题目：
        输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
 */
// time=O(n)
// space=O(1)
// 迭代版本，此题也可以考虑递归
function mergeList(list1, list2) {
    let p = list1, q = list2, head = { next: null }, current = head
    while (p && q) {
        if (p.val < q.val) {
            current.next = p
            p = p.next
        } else {
            current.next = q
            q = q.next
        }
        current = current.next
    }
    if (p || q) {
        current.next = p || q;
    }
    return head.next
}