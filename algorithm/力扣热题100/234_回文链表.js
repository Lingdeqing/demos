// 数组再双指针
var isPalindrome = function (head) {
    let p = head;
    const arr = []
    while (p) {
        arr.push(p.val);
        p = p.next;
    }
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        if (arr[i] !== arr[j]) return false
    }
    return true
};

// 递归反向遍历(后序遍历)
var isPalindrome = function (head) {
    let p = head;
    const recur = (q) => {
        if (!q) return true;
        if (!recur(q.next)) return false;
        if (q.val !== p.val) return false;
        p = p.next;
        return true
    }
    return recur(head);
};