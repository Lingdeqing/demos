/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    if (!head || !head.next) return head; // 至少两个节点

    // 切成两半
    const middle = findMiddle(head);
    let halfA = head;
    let halfB = middle.next;
    middle.next = null
    // 分别排序
    halfA = sortList(halfA);
    halfB = sortList(halfB);
    // 合并两半
    return mergeList(halfA, halfB)
};

function mergeList(headA, headB) {
    const head = { next: null }
    let p = head;
    while (headA && headB) {
        if (headA.val > headB.val) {
            p.next = headB
            headB = headB.next;
        } else {
            p.next = headA
            headA = headA.next;
        }
        p = p.next;
    }
    p.next = headA || headB
    return head.next;
}
// 奇数中间那个，偶数前面一半尾节点
function findMiddle(head) {
    let slow = head;
    let fast = head;
    while (fast?.next?.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow
}