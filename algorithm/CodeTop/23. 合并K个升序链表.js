// 23. 合并K个升序链表
// https://leetcode.cn/problems/merge-k-sorted-lists/

import PriorityQueue from "../lib/PriorityQueue"
function mergeKLists(lists) {
    const pq = new PriorityQueue((a, b) => a.val < b.val)
    lists.forEach((node) => {
        if (node) {
            pq.add(node)
        }
    })

    let res = { next: null }, h = res
    while (!pq.isEmpty()) {
        const node = pq.poll()
        if (node.next) {
            pq.add(node.next)
        }
        h.next = node;
        h = h.next;
    }
    return res.next
}