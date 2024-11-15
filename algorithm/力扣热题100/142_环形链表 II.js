var detectCycle = function (head) {
    let slow = head, fast = head;
    while (fast?.next?.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            slow = head;
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow
        }
    }
    return null;
};