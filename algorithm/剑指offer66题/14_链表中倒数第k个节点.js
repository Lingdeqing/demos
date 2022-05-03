/**
    题目：
        输入一个链表，输出该链表中倒数第k个结点。
 */
// time=O(n)
function getKthFromEnd(list, k) {
    let slow = list, fast = list
    while (fast && k--) {
        fast = fast.next
    }
    while (fast) {
        slow = slow.next;
        fast = fast.next
    }
    return slow
}

