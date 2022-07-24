// 题目描述：
// 给定两个整数数组，arr1、arr2，数组元素按升序排列；
// 假设从arr1、arr2中分别取出一个元素，可构成一对元素；
// 现在需要取出k对元素，并对取出的所有元素求和，计算和的最小值；
// 注意：两对元素对应arr1、arr2的下标是相同的，视为同一对元素。

// 输入描述
// 输入两行数组arr1、arr2
// 每行首个数字为数组大小size， 0 < size <= 100
// arr1，arr2中的每个元素e， 0< e <1000
// 接下来一行，正整数k 0 < k <= arr1.size * arr2.size

// 输出描述
// 满足要求的最小值

// 示例一
// 输入
// 1 1 2
// 1 2 3
// 2

// 输出
// 4

// 说明：
// 用例中需要取两个元素，取第一个数组第0个元素与第二个数组第0个元素组成一个元素[1,1];
// 取第一个数组第1个元素与第二个数组第0个元素组成一个元素[1,1];
// 求和为1+1+1+1=4 ,满足要求最小

function solution(arr1, arr2, k) {
    let arr = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            arr.push(arr1[i] + arr2[j])
        }
    }
    arr.sort((a, b) => a - b)
    return arr.slice(0, k).reduce((sum, n) => sum += n, 0)
}

console.log(solution([1, 1, 2, 3, 4, 4], [1, 1, 2], 5))