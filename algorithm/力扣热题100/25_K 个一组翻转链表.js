/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let p = head, n = k - 1
    while (n && p) {
        p = p.next
        n--
    }
    if (!p) return head
    const next = p.next
    p.next = null
    let res = reverseList(head)
    const subRes = reverseKGroup(next, k)
    head.next = subRes
    return res
};
function reverseList(head) {
    if (!head?.next) return head
    const next = head.next
    const subRes = reverseList(next)
    next.next = head
    head.next = null
    return subRes

}
console.log(reverseKGroup(list([1, 2, 3, 4, 5]), 3))
function list(arr) {
    let x = { next: null }, p = x
    for (let i = 0; i < arr.length; i++) {
        p.next = {
            val: arr[i],
            next: null
        }
        p = p.next
    }
    return x.next
}
