// 707. 设计链表
// https://leetcode.cn/problems/design-linked-list/


function Node(val) {
    this.val = val;
    this.prev = null;
    this.next = null
}
var MyLinkedList = function () {
    this.hair = new Node(-1)
    this.tail = new Node(-1)
    this.hair.next = this.tail
    this.tail.prev = this.hair
    this.size = 0
};

MyLinkedList.prototype._insertAfterNode = function (prev, val) {
    const newNode = new Node(val)
    const next = prev.next
    newNode.prev = prev
    newNode.next = next
    prev.next = newNode
    next.prev = newNode
    this.size++
}



MyLinkedList.prototype._getNodeAtIndex = function (index) {
    if (this.size === 0) return null
    let res = this.hair
    while (index--) {
        res = res.next
    }
    return res
}

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    const node = this._getNodeAtIndex(index + 1)
    return node ? node.val : -1
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    this._insertAfterNode(this.hair, val)
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    this._insertAfterNode(this.tail.prev, val)
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0) return this.addAtIndex(0, val)
    if (index > this.size) return

    const prev = this._getNodeAtIndex(index) || this.hair
    this._insertAfterNode(prev, val)
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (this.size === 0) return
    if (index >= this.size || index < 0) return
    const prev = this._getNodeAtIndex(index)
    if (prev) {
        const next = prev.next.next
        prev.next = next
        next.prev = prev
        this.size--
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */


// ["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]
// [[],[1],[3],[1,2],[1],[1],[1]]

// ["MyLinkedList","addAtIndex","addAtIndex","addAtIndex","get"]
// [[],[0,10],[0,20],[1,30],[0]]


// ["MyLinkedList","addAtHead","deleteAtIndex","addAtHead","addAtHead","addAtHead","addAtHead","addAtHead","addAtTail","get","deleteAtIndex","deleteAtIndex"]
// [[],[2],[1],[2],[7],[3],[2],[5],[5],[5],[6],[4]]

// ["MyLinkedList","addAtIndex","get"]
// [[],[1,0],[0]]
const list = new MyLinkedList()
list.addAtIndex(1, 0)
list.get(0)