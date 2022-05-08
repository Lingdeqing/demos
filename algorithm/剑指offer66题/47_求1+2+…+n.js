/**
    题目：
        求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

 */

// time: 
// space:

// 浏览器环境下面，可以利用css calc、eval、创建n个高度为i的节点获取父节点高度
// 俄罗斯农民乘法：用加法和位运算取代乘法 https://leetcode-cn.com/problems/qiu-12n-lcof/solution/qiu-12n-by-leetcode-solution/

// es6数组map等方法
function sumNums(n) {
    return new Array(n).fill(1).reduce((sum, value, index) => {
        sum += index + 1
        return sum
    })
};

// 递归=>迭代
// 逻辑短路=>if
function sumNums(n) {
    return (n && (sumNums(n - 1) + n)) || 0
};



function sumNums(n) {
    try {
        const temp = [0]
        return temp[n]  // 模拟java，java这种数组越界会直接throw error，这边纯粹为了演示
        // return (temp[n] === undefined && throwError()) || temp[n]
    } catch {
        return n + sumNums(n - 1)
    }
};
function throwError() {
    throw new Error()
}
