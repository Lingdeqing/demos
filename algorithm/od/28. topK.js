/*
            给定一个数组
            编写一个函数
            来计算他的最大N个数和最小N个数的和
            需要对数组进行去重

            说明
            第一行输入M
            M表示数组大小
            第二行输入M个数
            表示数组内容
            第三行输入N表示需要计算的最大最小N的个数

            输出描述
            输出最大N个数和最小N个数的和

            例一：
                输入
                5
                95 88 83 64 100
                2

                输出
                342

                说明
                最大2个数[100 95] 最小2个数[83 64]
                输出342

             例二
                输入
                5
                3 2 3 4 2
                2

                输出
                 -1
                 说明
                 最大两个数是[4 3]最小2个数是[3 2]
                 有重叠输出为-1

         */
function solution(nums, m, n) {
    let sum = 0
    function quickSort(nums, left, right) {
        let i = left, j = right;
        while (i < j) {
            while (i < j && nums[j] <= nums[left]) j--;
            while (i < j && nums[i] >= nums[left]) i++;
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        [nums[i], nums[left]] = [nums[left], nums[i]];

        if (i > m) {
            quickSort(nums, left, i - 1)
        } else if (i === m) {
            for (let i = 0; i < m; i++) {
                sum += nums[i]
            }
        }
        if (nums.length - i - 1 > n) {
            quickSort(nums, i + 1, right)
        } else if (nums.length - i - 1 === n) {
            for (let i = nums.length - 1; i > nums.length - 1 - n; i--) {
                sum += nums[i]
            }
        }
    }
    quickSort(nums, 0, nums.length - 1)
    return sum
}


function solution(nums, m) {
    nums = [...new Set(nums)].sort((a, b) => a - b)
    if (m * 2 > nums.length) return -1
    let sum = 0
    for (let i = 0; i < m; i++) {
        sum += nums[i]
    }
    for (let i = 0; i < m; i++) {
        sum += nums[nums.length - i - 1]
    }
    return sum
}
console.log(solution([95, 88, 83, 64, 100], 2))