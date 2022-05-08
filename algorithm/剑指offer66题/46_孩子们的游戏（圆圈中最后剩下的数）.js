/**
    题目：
        0,1,···,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。求出这个圆圈里剩下的最后一个数字。

        例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。

 */

// time: 
// space:
// 约瑟夫问题
// 最后胜出的人索引一定是0，每次数数字相当于整体循环左移m位
// 从最终结果向前倒推，推出最后胜出人的初始位置
function lastRemaining(n, m) {
    let res = 0;
    for (let i = 2; i <= n; i++) {
        res = (res + m) % i
    }
    return res
};

function lastRemaining(n, m) {
    const nums = []
    for (let i = 0; i < n; i++) {
        nums.push(i)
    }
    let cur = 0;
    while (n > 1) {
        cur += m - 1;
        cur %= n;
        nums.splice(cur, 1)
        n--;
    }
    return nums[0]
};