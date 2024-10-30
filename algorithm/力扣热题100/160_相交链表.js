// 哈希
var getIntersectionNode = function (headA, headB) {
    const set = new Set();
    let p = headA;
    while (p) {
        set.add(p)
        p = p.next;
    }
    p = headB;
    while (p) {
        if (set.has(p)) {
            return p;
        }
        p = p.next;
    }
    return null;
};


// 两个链表 AB、CB，B为公共尾部
// ABCB和CBAB的 ABC CBA长度一样
var getIntersectionNode = function (headA, headB) {
    let p = headA, q = headB;
    while (p != q) {
        if (p === q)
            return p;
        if (p) p = p.next;
        else p = headB;
        if (q) q = q.next;
        else q = headA;
    }
    return p;
};
