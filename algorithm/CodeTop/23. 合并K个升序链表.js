// 23. 合并K个升序链表
// https://leetcode.cn/problems/merge-k-sorted-lists/

import PriorityQueue from "../lib/PriorityQueue"

function mergeKLists(lists) {
    const pq = new PriorityQueue((a, b) => a.val < b.val)
    lists.forEach(list => list && pq.add(list))
    let res = { next: null }, p = res
    while (!pq.isEmpty()) {
        const list = pq.poll()
        if (list.next) pq.add(list.next)
        p.next = list;
        p = p.next
    }
    return res.next
}