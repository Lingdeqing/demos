// 递归
var reverseList = function (head) {
    if (!head || !head.next) return head;
    const tail = head.next;
    const result = reverseList(tail);
    tail.next = head;
    head.next = null
    return result;
};

// 迭代
var reverseList = function (head) {
    let p = null, q = head;
    while (q) {
        let r = q.next;
        q.next = p;
        p = q;
        q = r;
    }
    return p;
};