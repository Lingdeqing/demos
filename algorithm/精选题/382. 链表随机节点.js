// 382. 链表随机节点
// https://leetcode.cn/problems/linked-list-random-node/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function (head) {
    this.head = head;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
    let p = this.head, i = 0, res = 0
    while (p) {
        i++
        const r = Math.floor(Math.random() * i); // [0, i)
        if (r === 0) { // 1/i概率选中当前节点，证明见：https://mp.weixin.qq.com/s/vxQDGfshcSVjs9EYmV8q3Q
            res = p.val
        }
        p = p.next;
    }
    return res
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */