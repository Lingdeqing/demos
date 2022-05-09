/**
    题目：
    一个链表中包含环，请找出该链表的环的入口结点。
 */

// time: 
// space: 
function detectCycle(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        // 相遇了必定有环
        if (slow === fast) {
            // 让一个指针回到head，以相同速度前进，相遇点就是环起点
            slow = head;
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next
            }
            return slow
        }
    }
    return null
}