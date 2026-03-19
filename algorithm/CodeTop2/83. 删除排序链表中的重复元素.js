// 83. 删除排序链表中的重复元素
// https://leetcode.cn/problems/remove-duplicates-from-sorted-list/

// 未排序的链表
function deleteDuplicates(head) {
    let res = { next: head }, prev = res, cur = res.next, set = new Set();
    while (cur) {
        if (set.has(cur.val)) {
            prev.next = cur.next;
        } else {
            prev = cur;
        }
        set.add(cur.val)
        cur = cur.next;
    }
    return res.next
}

// 排好序的
function deleteDuplicates(head) {
    let res = { val: -1000, next: head }, prev = res, cur = res.next
    while (cur) {
        if (cur.val === prev.val) {
            prev.next = cur.next;
        } else {
            prev = cur
        }
        cur = cur.next;
    }
    return res.next
}

// 快慢指针
function deleteDuplicates(head) {
    if (!head) return head;
    let slow = head, fast = head;
    while (fast) {
        if (slow.val !== fast.val) {
            slow.next = fast;
            slow = slow.next;
        }
        fast = fast.next;
    }
    slow.next = null
    return head;
}