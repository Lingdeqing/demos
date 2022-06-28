// 206. 反转链表
// https://leetcode.cn/problems/reverse-linked-list/

function reverseList(head) {
    if (!head || !head.next) return head;
    const newHead = reverseList(head.next)
    head.next.next = head
    head.next = null
    return newHead
}



function reverseList2(head) {
    let prev = null, cur = head;
    while (cur) {
        const next = cur.next
        cur.next = prev
        prev = cur;
        cur = next;
    }
    return prev
}
console.log(reverseList2({
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3
        }
    }
}))


// 双倍快乐
// https://leetcode.cn/problems/reverse-linked-list-ii/
function reverseBetween(head, left, right) {
    if (!head || !head.next || left < 1) return head;

    let tail = null
    function reverseN(head, n) {
        if (!head || !head.next || n < 1) return head;
        if (n === 1) {
            tail = head.next
            return head;
        }
        const nextHead = reverseN(head.next, n - 1)
        head.next.next = head;
        head.next = tail;
        return nextHead;
    }

    if (left === 1) {
        return reverseN(head, right)
    }
    head.next = reverseBetween(head.next, left - 1, right - 1)
    return head
}


function reverseBetween2(head, left, right) {
    // let k = 0, prev = null, cur = head,
    //     headTail = null, tailHead = null,
    //     reversedHead = null, reversedTail = null;
    // while (cur) {
    //     if (k === left - 1) {
    //         headTail = prev;
    //         reversedTail = cur;
    //     }
    //     if (k === right - 1) {
    //         tailHead = cur.next;
    //         reversedHead = cur;
    //     }
    //     if (k < left || k >= right) {
    //         prev = cur;
    //         cur = cur.next;
    //     } else {
    //         const next = cur.next;
    //         cur.next = prev;
    //         prev = cur;
    //         cur = next;
    //     }
    //     k++;
    // }
    // if (headTail) {
    //     headTail.next = reversedHead;
    // }
    // if (reversedTail) {
    //     reversedTail.next = tailHead;
    // }
    // return left > 1 ? head : reversedHead;
    // 老实点
    let leftTail = null, rightHead = null, reversedTail = null, reversedHead = null
    for (let i = 1; i < left; i++) {
        if (i === 1) leftTail = head;
        else leftTail = leftTail.next;
    }
    for (let i = 1; i <= right; i++) {
        if (i === 1) reversedTail = head;
        else reversedTail = reversedTail.next;
    }

    // 切断
    if (leftTail) {
        reversedHead = leftTail.next;
        leftTail.next = null;
    } else {
        reversedHead = head;
    }
    if (reversedTail) {
        rightHead = reversedTail.next;
        reversedTail.next = null
    }

    // 颠倒中间部分
    let prev = null, cur = reversedHead;
    while (cur) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }

    // 再连回去
    if (leftTail) {
        leftTail.next = reversedTail;
    }
    if (reversedHead) {
        reversedHead.next = rightHead
    }

    return leftTail ? head : reversedTail
}


// 官方题解2, 头插法，很难写对，放弃啦
// https://leetcode.cn/problems/reverse-linked-list-ii/solution/fan-zhuan-lian-biao-ii-by-leetcode-solut-teyq/
function list(arr) {
    let x = { next: null }, p = x
    for (let i = 0; i < arr.length; i++) {
        p.next = {
            val: arr[i],
            next: null
        }
        p = p.next
    }
    return x.next
}
console.log(reverseBetween2(list([3, 5]), 1, 2))