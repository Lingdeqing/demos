// 21. 合并两个有序链表
// https://leetcode.cn/problems/merge-two-sorted-lists/

function mergeTwoLists(list1, list2) {
    let res = { next: null }, h = res;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            h.next = list1;
            list1 = list1.next
        } else {
            h.next = list2;
            list2 = list2.next
        }
        h = h.next
    }
    h.next = list1 || list2;
    return res.next
}