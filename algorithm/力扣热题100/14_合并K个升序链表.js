// 23. 合并K个升序链表

import PriorityQueue from "../lib/PriorityQueue"
function mergeKLists(lists) {
    const queue = new PriorityQueue((a, b) => a.val < b.val)
    for (let i = 0; i < lists.length; i++) {
        if (lists[i]) {
            queue.add(lists[i])
        }
    }

    const dummy = {
        next: null
    };
    let cur = dummy;
    while (!queue.isEmpty()) {
        const min = queue.poll()
        if (min.next) {
            queue.add(min.next)
        }
        cur.next = min
        cur = cur.next
    }
    return dummy.next
}