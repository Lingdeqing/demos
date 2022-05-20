// https://www.nowcoder.com/practice/97ba57c35e9f4749826dc3befaeae109


function allOutOrder(inOrder) {
    const stack = []; // 火车站
    const res = []; // 结果集
    // i: 入栈序列位置 j: 出栈个数
    function backtrack(path, i, j) {
        if (i === inOrder.length && j === inOrder.length) { // 全部入栈和出栈了
            res.push([...path])
            return
        }

        // 选择 入栈
        if (i < inOrder.length) {
            stack.push(inOrder[i])
            backtrack(path, i + 1, j)
            stack.pop()
        }
        // 选择 出栈
        if (stack.length > 0) {
            const top = stack.pop()
            path.push(top)
            backtrack(path, i, j + 1)
            path.pop()
            stack.push(top)
        }
    }
    backtrack([], 0, 0)

    // 字典序输出
    const sorted = res.map(order => order.join(' '))
    sorted.sort()
    return sorted
}