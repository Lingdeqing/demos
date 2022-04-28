function printList(list) {
    if (list.next) {
        printList(list.next)
    }
    console.log(list.val)
}

function printListLoop(list) {
    const stack = []
    while (list) {
        stack.push(list.val)
        list = list.next
    }
    while (stack.length > 0) {
        console.log(stack.pop())
    }
}