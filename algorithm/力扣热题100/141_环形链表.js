var hasCycle = function (head) {
    let slow = head, fast = head;
    while (fast?.next?.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true
    }
    return false
};