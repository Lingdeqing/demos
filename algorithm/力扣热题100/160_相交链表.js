

// 两个链表 AB、CB，B为公共尾部
// ABCB和CBAB的 ABC CBA长度一样

// 注意这个方法有个bug，虽然通过了leetcode测试
// 如果AB和CB长度一样，则p、q都走到了空节点，就会提前返回null了，加上pFlag使得两个指针至少跑了两个链表一次
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let p = headA, q = headB;
    let pFlag = false, qFlag = false
    while (p !== q || !pFlag || !qFlag) {
        if (p) p = p.next;
        else {
            p = headB;
            pFlag = true
        }
        if (q) q = q.next;
        else {
            q = headA;
            qFlag = true
        }
    }
    return p
}