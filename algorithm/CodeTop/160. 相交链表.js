// 160. 相交链表
// https://leetcode.cn/problems/intersection-of-two-linked-lists/

function getIntersectionNode(headA, headB) {
    let p = headA, q = headB;
    while (p) {
        q = headB;
        while (q) {
            if (p === q) return p
            q = q.next;
        }
        p = p.next;
    }
    return null
}


function getIntersectionNode(headA, headB) {
    let p = headA, set = new Set()
    while (p) {
        set.add(p)
        p = p.next
    }
    p = headB
    while (p) {
        if (set.has(p)) return p
        p = p.next
    }
    return null
}

function getIntersectionNode(headA, headB) {
    let p = headA, q = headB
    while (p !== q) {
        if (!p) p = headB
        else p = p.next
        if (!q) q = headA
        else q = q.next
    }
    return p
}