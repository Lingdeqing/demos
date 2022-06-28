// 24. 两两交换链表中的节点
// https://leetcode.cn/problems/swap-nodes-in-pairs/

// 迭代用dummy
function swapPairs(head) {
    let res = { next: head }, cur = res.next, prev = res;
    while (cur && cur.next) {
        let temp = cur.next.next;
        cur.next.next = cur
        prev.next = cur.next
        cur.next = temp
        prev = prev.next.next
        cur = temp
    }
    return res.next
}

// 递归
function swapPairs(head) {
    if (!head || !head.next) return head;
    const next = head.next
    head.next = swapPairs(next.next)
    next.next = head;
    return next
}