// 21. 合并两个有序链表

function mergeTwoLists(list1, list2) {
    const dummy = {
        next: null
    };
    let p = list1, q = list2, cur = dummy;
    while (p && q) {
        if (p.val < q.val) {
            cur.next = p
            p = p.next
        } else {
            cur.next = q
            q = q.next
        }
        cur = cur.next
    }
    if (p || q) {
        cur.next = p || q
    }
    return dummy.next
}