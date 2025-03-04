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

function deserializeArray(nodes) {
    const root = {
        val: nodes.shift()
    }
    const queue = [root]
    while (queue.length && nodes.length) {
        const node = queue.shift()

        const leftVal = nodes.shift()
        if (leftVal !== null) {
            const leftNode = {
                val: leftVal
            }
            node.left = leftNode
            queue.push(leftNode)
        }

        const rightVal = nodes.shift()
        if (rightVal !== null) {
            const rightNode = {
                val: rightVal
            }
            node.right = rightNode
            queue.push(rightNode)
        }
    }
    return root
}