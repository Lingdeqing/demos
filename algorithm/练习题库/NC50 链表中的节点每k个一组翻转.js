// NC50 链表中的节点每k个一组翻转
// https://www.nowcoder.com/practice/b49c3dc907814e9bbfa8437c251b028e?tpId=196&&tqId=37080&rp=1&ru=/ta/job-code-total&qru=/ta/job-code-total/question-ranking


/**
  * 
  * @param head ListNode类 
  * @param k int整型 
  * @return ListNode类
  */
function reverseKGroup(head, k) {
    let p = head, prev = null
    for (let i = 0; i < k && p; i++) {
        const next = p.next;
        p.next = prev;
        prev = p;
        p = next;
    }
    if (p) {
        const nextList = reverseKGroup(p, k)
        head.next = nextList
    }
    return prev
}

const reversed = reverseKGroup({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } }, 2)
console.log(reversed)