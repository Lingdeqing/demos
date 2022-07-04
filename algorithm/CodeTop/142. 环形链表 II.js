// 142. 环形链表 II
// https://leetcode.cn/problems/linked-list-cycle-ii/

// 证明过程：b为环节点数，a为非环节点数 f为快指针步数，s为慢指针步数，快2慢1 f=2s,f=s+nb,n为圈数，快慢第一次相遇时，有2s=s+nb,推出s=nb; 设k为走到环节点的步数 k = a+nb 一定成立，此时s已经在nb了，再走a布就是k点了，重置快指针为head,此时快指针一步一步走，走a步，一定也会到k点，因此，此时快慢第二次相遇，一定是k点
function detectCycle(head) {
    let slow = head, fast = head
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            fast = head;
            while (fast !== slow) {
                fast = fast.next;
                slow = slow.next;
            }
            return fast
        }
    }
    return null
}