// 92. 反转链表 II
// https://leetcode.cn/problems/reverse-linked-list-ii/

function reverseBetween(head, left, right) {
    if (!head || !head.next) return head
    if (left === 1) {
        return reverseN(head, right)
    } else {
        head.next = reverseBetween(head.next, left - 1, right - 1)
        return head
    }
}
function reverseN(head, n) {
    if (!head || !head.next) return head
    if (n === 1) return head;
    const tail = head.next
    const newHead = reverseN(tail, n - 1)
    head.next = tail.next
    tail.next = head
    return newHead
}

console.log(reverseBetween({
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
}, 2, 4))