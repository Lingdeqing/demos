// 题目描述：
// 二叉树也可以用数组来存储，
// 给定一个数组，树的根节点的值储存在下标1，
// 对于储存在下标n的节点，他的左子节点和右子节点分别储存在下标2*n和2*n+1，
// 并且我们用-1代表一个节点为空，
// 给定一个数组存储的二叉树，
// 试求从根节点到最小的叶子节点的路径，
// 路径由节点的值组成。

// 输入描述
// 输入一行为数组的内容，
// 数组的每个元素都是正整数，元素间用空格分割，
// 注意第一个元素即为根节点的值，
// 即数组的第n元素对应下标n，
// 下标0在树的表示中没有使用，所以我们省略了，
// 输入的树最多为7层。

// 输出描述
// 输出从根节点到最小叶子节点的路径上各个节点的值，
// 由空格分割，
// 用例保证最小叶子节点只有一个。

// 示例一
// 输入

// 3 5 7 -1 -1 2 4
// COPY
// 输出

// 3 7 2
// COPY
// 示例二
// 输入

// 5 9 8 -1 -1 7 -1 -1 -1 -1 -1 6
// COPY
// 输出

// 5 8 7 6


function solution(heap) {
    let min = Infinity, ans = null
    function left(n) {
        return 2 * n
    }
    function right(n) {
        return 2 * n + 1
    }
    function hasLeft(n) {
        return left(n) < heap.length && heap[left(n)] !== -1
    }
    function hasRight(n) {
        return right(n) < heap.length && heap[right(n)] !== -1
    }

    function dfs(n, path = []) {
        if (n >= heap.length || heap[n] === -1) {
            return
        }
        path.push(heap[n])
        if (!hasLeft(n) && !hasRight(n) && heap[n] < min) {
            ans = [...path]
            min = heap[n]
        }
        if (hasLeft(n)) {
            dfs(left(n), path)
        }
        if (hasRight(n)) {
            dfs(right(n), path)
        }
        path.pop()
    }
    dfs(1)
    return ans
}

console.log(solution('0 5 9 8 -1 -1 7 -1 -1 -1 -1 -1 6'.split(' ').map((i) => parseInt(i))))