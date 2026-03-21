// 143. 重排链表
// https://leetcode.cn/problems/reorder-list/

function reorderList(head) {
    let map = [], p = head, i = 0
    while (p) {
        map[i++] = p
        p = p.next;
    }

    let res = { next: null }, h = res;
    for (i = 0; i < map.length / 2; i++) {
        h.next = map[i]
        h = h.next;
        if (map.length - 1 - i > i) {
            h.next = map[map.length - 1 - i]
            h = h.next;
        }
    }
    h.next = null
    return res.next
}


// 找中点，反转、合并链表
function reorderList2(head) {
    const middle = middleNode(head)
    let list1 = head;
    let list2 = middle.next;
    middle.next = null
    list2 = reverseList(list2)
    mergeList(list1, list2)
}
// 若题目要求返回「第一个中间节点」，则应在 fast 遇到尾节点或其前驱节点 时跳出循环。此时，修改判断条件为 while fast.next and fast.next.next 即可。
function middleNode(head) {
    if (!head) return head
    let slow = head, fast = head;
    while (fast.next && fast.next.next) {
        fast = fast.next.next
        slow = slow.next;
    }
    return slow
}
function reverseList(head) {
    if (!head || !head.next) return head;
    const next = head.next;
    const newHead = reverseList(next)
    next.next = head;
    head.next = null;
    return newHead
}
function mergeList(list1, list2) {
    let p = list1, q = list2, dummy = { next: null }, h = dummy
    while (p && q) {
        h.next = p;
        h = h.next;
        p = p.next;

        h.next = q;
        h = h.next;
        q = q.next;
    }
    if (p) {
        h.next = p
    }
}

const a = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
}
reorderList2(a)
console.log(JSON.stringify(a, null, 2))
