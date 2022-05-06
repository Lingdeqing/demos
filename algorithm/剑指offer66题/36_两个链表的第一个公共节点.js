/**
    题目：
        输入两个链表，找出它们的第一个公共结点。
 */

// time: 
// space: 
// 双指针
function commonNode(headA, headB) {
    let p = headA, q = headB
    while (p !== q) {
        p = p ? p.next : headB;
        q = q ? q.next : headA;
    }
    return p
}
// 哈希表
function commonNode(list1, list2) {
    const set = new Set()
    while (list1) {
        set.add(list1)
        list1 = list1.next;
    }
    while (list2) {
        if (set.has(list2)) {
            return list2
        }
        list2 = list2.next;
    }
    return null
}

