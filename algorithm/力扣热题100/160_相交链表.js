

// 两个链表 AB、CB，B为公共尾部
// ABCB和CBAB的 ABC CBA长度一样

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let p = headA, q = headB;
    while (p !== q) {
        if (p) p = p.next;
        else p = headB;
        if (q) q = q.next;
        else q = headA;
    }
    return p
}