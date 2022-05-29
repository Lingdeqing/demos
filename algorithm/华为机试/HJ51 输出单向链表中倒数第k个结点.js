// https://www.nowcoder.com/practice/54404a78aec1435a81150f15f899417d
function ListNode(val, next = null) {
    this.m_nKey = val;
    this.m_pNext = next;
}
function buildList(nums) {
    const dummy = new ListNode(-1)
    let prev = dummy;
    for (let i = 0; i < nums.length; i++) {
        const cur = new ListNode(nums[i])
        prev.m_pNext = cur;
        prev = cur;
    }
    return dummy.m_pNext
}

function getLastK(head, k) {
    let p = head;
    while (k-- && p) {
        p = p.m_pNext;
    }
    while (p) {
        p = p.m_pNext
        head = head.m_pNext;
    }
    return head
}

console.log(getLastK(buildList('1 2 3 4 5 6 7 8'.split(' ').map(item => +item)), 4))