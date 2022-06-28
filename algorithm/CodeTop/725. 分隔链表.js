// 725. 分隔链表
// https://leetcode.cn/problems/split-linked-list-in-parts//

// 也可以一次遍历，将所有的指针放到数组中，然后再到对应位置切分
function splitListToParts(head, k) {
    let size = 0, p = head;
    while (p) {
        p = p.next;
        size++;
    }

    let res = Array.from({ length: k }, () => null)
    // if (size <= k) {
    //     let temp = null, i = 0
    //     p = head
    //     while (p) {
    //         res[i++] = p
    //         temp = p.next
    //         p.next = null
    //         p = temp
    //     }
    // } else {
    let avgSize = Math.floor(size / k), modSize = size > k ? size % k : 0
    let h = null, temp = null
    p = head;
    for (let i = 0; i < k; i++) {
        h = p;
        for (let j = 0; j < avgSize - 1; j++) {
            p = p.next;
        }
        if (modSize > 0) {
            p = p.next;
            modSize--
        }
        res[i] = h;
        if (!p) break;
        temp = p.next;
        p.next = null;
        p = temp;
    }
    // }
    return res
}