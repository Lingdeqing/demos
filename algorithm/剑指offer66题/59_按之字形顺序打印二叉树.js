/**
    题目：
    请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。
 */

// time: 
// space: 
// 双端队列=>js中数组，可以两端添加删除
function zOrder(root) {
    const res = []
    if (!root) return res
    const queue = [root]
    while (queue.length > 0) {
        let len = queue.length;
        const level = [];
        while (len > 0) {
            len--;
            let node = queue.shift();
            if (res.length % 2 === 0) level.push(node.val); // 偶数
            else level.unshift(node.val); // 奇数
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(level)
    }
    return res;
}

function zOrder(root) {
    const res = []
    if (!root) return res
    let queue = [root]
    let dir = 'right'
    while (queue.length > 0) {
        let len = queue.length;
        const level = [];
        const newQueue = []
        for (let i = 0; i < len; i++) {
            // 打印
            if (dir === 'right') {
                level.push(queue[i].val);
            } else {
                level.push(queue[len - i - 1].val)
            }
            // 遍历
            let node = queue[i];
            if (node.left) newQueue.push(node.left);
            if (node.right) newQueue.push(node.right);
        }
        queue = newQueue
        res.push(level)
        dir = dir === 'right' ? 'left' : 'right'
    }
    return res;
}