// 141. 环形链表
// https://leetcode.cn/problems/linked-list-cycle/

function hasCycle(head) {
    let fast = slow = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) return true
    }
    return false
}