// 2. 两数相加
// https://leetcode.cn/problems/add-two-numbers/

function addTwoNumbers(l1, l2) {
    let carry = 0, p = l1, q = l2, res = { next: null }, h = res
    while (p || q || carry) {
        let sum = carry
        if (p) {
            sum += p.val
            p = p.next;
        }
        if (q) {
            sum += q.val
            q = q.next
        }
        carry = Math.floor(sum / 10)
        h.next = {
            val: sum % 10,
            next: null
        }
        h = h.next
    }
    return res.next
}