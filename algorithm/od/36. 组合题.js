/*
       用数组代表每个人的能力
       一个比赛活动要求 参赛团队的最低能力值为N
       每个团队可以由一人或者两人组成
       且一个人只能参加一个团队
       计算出最多可以派出多少只符合要求的队伍

       输入描述
       5
       3 1 5 7 9
       8
       第一行代表总人数，范围  1~500000
       第二行数组代表每个人的能力
          数组大小范围 1~500000
          元素取值范围 1~500000
       第三行数值为团队要求的最低能力值
        1~500000

        输出描述
        3
        最多可以派出的团队数量

        示例一
        输入
        5
        3 1 5 7 9
        8

        输出
        3

        说明 3、5组成一队   1、7一队  9自己一队  输出3

        7
        3 1 5 7 9 2 6
        8

       3
       1 1 9
       8

         */

// 好好读题目啦
// function solution(nums, min) {
//     let ans = 0
//     function backtrack(path, sum, start) {
//         if (start === nums.length) return;
//         if (sum >= min && path.length <= 2) ans++;
//         for (let i = start; i < nums.length; i++) {
//             path.push(nums[i])
//             backtrack(path, sum + nums[i], i + 1)
//             path.pop()
//         }
//     }
//     backtrack([], 0, 0)
//     return ans
// }

// 双指针
function solution(nums, min) {
    let ans = 0
    nums.sort((a, b) => a - b)
    let i = 0, j = nums.length - 1;
    while (i <= j) {
        if (nums[j] >= min) {
            ans++
            j--
        } else if (i < j && nums[i] + nums[j] >= min) {
            ans++
            i++
            j--
        } else {
            i++
        }
    }
    return ans
}

console.log(solution([3, 1, 5, 7, 9], 8))