// https://www.nowcoder.com/practice/f96cd47e812842269058d483a11ced4f

function removeNode(head, target) {
    const dummy = new ListNode(null, head)
    let prev = dummy;
    while (prev.next) {
        if (prev.next.val === target) {
            prev.next = prev.next.next
            break
        }
        prev = prev.next
    }
    return dummy.next
}

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}
function buildList(input) {
    if (input.length === 0) return null
    const head = new ListNode(input[0]), map = new Map();
    map.set(input[0], head)
    for (let i = 1; i < input.length; i += 2) {
        const next = input[i], prev = input[i + 1];
        if (!map.has(prev)) {
            map.set(prev, new ListNode(prev))
        }
        if (!map.has(next)) {
            map.set(next, new ListNode(next))
        }
        const prevNode = map.get(prev)
        const nextNode = map.get(next)
        if (prevNode.next) {
            nextNode.next = prevNode.next
            prevNode.next = nextNode
        } else {
            prevNode.next = nextNode
        }
    }
    return head;
}

const nums = '5 2 3 2 4 3 5 2 1 4 3'.split(' ')

const list = buildList(nums.slice(1, -1))
const result = removeNode(list, nums[nums.length - 1])