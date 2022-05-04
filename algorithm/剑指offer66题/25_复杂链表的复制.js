/**
    题目：
        题目：输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
 */
// time:
// space:
// function copyRamdomList(head) {
//     const map = new Map()// 旧节点到新节点的map

//     // 复制节点
//     function copyList(head) {
//         if (!head) return null
//         const next = copyList(head.next)
//         const newHead = new Node(head.val, head.next, head.random)
//         map.set(head, newHead) // 旧节点到新节点的map
//         newHead.next = next;
//         return newHead
//     }
//     const newList = copyList(head)

//     // 调整random指向到新节点
//     head = newList
//     while (head) {
//         head.random = map.get(head.random)
//         head = head.next
//     }

//     return newList
// }


function copyRamdomList(head) {
    if (!head) return null
    const map = new Map()// 旧节点到新节点的map

    // 复制节点
    let current = head
    while (current) {
        const newNode = new Node(current.val)
        map.set(current, newNode)
        current = current.next;
    }

    // 调整next,random指针
    current = head
    while (current) {
        const newNode = map.get(current)
        newNode.random = map.get(current.random)
        newNode.next = map.get(current.next)
        current = current.next
    }

    return map.get(head)
}

function Node(val, next, random) {
    this.val = val
    this.next = next
    this.random = random
}

// const nodes = [
//     {
//         val: 7
//     },
//     {
//         val: 13,
//     },
//     {
//         val: 11,
//     },
//     {
//         val: 10,
//     },
//     {
//         val: 1,
//     }
// ]
// nodes[0].next = nodes[1]
// nodes[1].next = nodes[2]
// nodes[2].next = nodes[3]
// nodes[3].next = nodes[4]
// nodes[4].next = null

// nodes[0].random = null
// nodes[1].random = nodes[0]
// nodes[2].random = nodes[4]
// nodes[3].random = nodes[2]
// nodes[4].random = nodes[0]