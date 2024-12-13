/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const res = { next: null, val: 0 }
    let p = res, carry = 0
    while (l1 || l2 || carry) {
        if (l1) {
            carry += l1.val
            l1 = l1.next
        }
        if (l2) {
            carry += l2.val
            l2 = l2.next
        }
        p.next = {
            val: carry % 10,
            next: null
        }
        p = p.next
        carry = Math.floor(carry / 10)
    }
    return res.next
}