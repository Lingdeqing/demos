// NC78 反转链表
// https://www.nowcoder.com/practice/75e878df47f24fdc9dc3e400ec6058ca?tpId=196&&tqId=37111&rp=1&ru=/ta/job-code-total&qru=/ta/job-code-total/question-ranking


function ReverseList(pHead) {
    let prev = null, cur = pHead
    while (cur) {
        const next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    return prev
}

console.log(solve(10, [3, 7, 0, 9, 6, 5, 8, 4, 1, 2]))