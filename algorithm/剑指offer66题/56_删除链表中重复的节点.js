/**
    题目：
    在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5。
 */

// time: 
// space: 
function deleteDuplicates(head) {
    let p = head;
    while (p) {
        let q = p.next;
        while (q && q.val === p.val) q = q.next;
        p.next = q;
        p = p.next;
    }
    return head;
}


function deleteDuplicates(head) {
    let p = head;
    while (p && p.next) {
        if (p.val === p.next.val) {
            p.next = p.next.next
        } else {
            p = p.next
        }
    }
    return head;
}