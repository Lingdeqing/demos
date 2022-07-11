// 剑指 Offer 22. 链表中倒数第k个节点
// https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/

function getKthFromEnd(head, k) {
    let slow = head, fast = head;
    while (k--) fast = fast.next;
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
}