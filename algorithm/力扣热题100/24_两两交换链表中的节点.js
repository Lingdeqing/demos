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
var swapPairs = function (head) {
    if (!head?.next) return head
    let res = head.next
    const subRes = swapPairs(head.next.next)
    res.next = head
    head.next = subRes
    return res
};