/**
    题目：
        输入一个链表，反转链表后，输出链表的所有元素。
 */
// time=O(n)
// space=O(n)
// 递归版本
function reverseList(list) {
    if (!list || !list.next) return list
    let next = list.next
    const reversed = reverseList(next)
    next.next = list
    list.next = null
    return reversed
}

// time=O(n)
// space=O(1)
// 迭代版本
function reverseListLoop(list) {
    let p = null, q = list
    while (q) {
        const temp = q.next
        q.next = p
        p = q
        q = temp
    }
    return p
}
