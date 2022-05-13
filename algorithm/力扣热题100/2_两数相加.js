// https://leetcode.cn/problems/add-two-numbers/
function addTwoNumbers(l1, l2) {
    let p = l1, q = l2, carry = 0, res = { next: null }, cur = res;
    while (p || q || carry) {
        let sum = carry
        if (p) {
            sum += p.val;
            p = p.next;
        }
        if (q) {
            sum += q.val;
            q = q.next;
        }
        carry = ~~(sum / 10)
        cur.next = {
            val: sum % 10,
            next: null
        }
        cur = cur.next
    }
    return res.next
}