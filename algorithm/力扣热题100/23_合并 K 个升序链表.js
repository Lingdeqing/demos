const MinPriorityQueue2 = require('../lib/MinPriorityQueue2')
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    const pq = new MinPriorityQueue2({
        compare: (a, b) => {
            return a.val - b.val;
        }
    });
    for (let list of lists) {
        if (!list) continue
        pq.enqueue(list)
    }


    const dummy = { next: null }
    let p = dummy;
    while (!pq.isEmpty()) {
        const min = pq.dequeue();
        p.next = min;
        if (min.next) {
            pq.enqueue(min.next)
        }
        p = p.next
    }
    return dummy.next
};


function list(arr) {
    let x = { next: null }, p = x
    for (let i = 0; i < arr.length; i++) {
        p.next = {
            val: arr[i],
            next: null
        }
        p = p.next
    }
    return x.next
}

mergeKLists(
    [
        list([1, 4, 5]),
        list([1, 3, 4]),
        list([2, 6])
    ]
)