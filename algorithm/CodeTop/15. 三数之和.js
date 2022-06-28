// 15. 三数之和
// https://leetcode.cn/problems/3sum/

// twoSum用Map的方式不行了，这边得用双指针

function threeSum(nums) {
    nums.sort((a, b) => a - b)
    return nSum(nums, 3, 0, 0)
}
function nSum(nums, n, start, target) {
    let res = []
    if (n === 2) {
        let i = start, j = nums.length - 1;
        while (i < j) {
            const leftNum = nums[i]
            const rightNum = nums[j]
            const sum = leftNum + rightNum
            if (sum > target) {
                while (i < j && nums[j] === rightNum) j--
            } else if (sum < target) {
                while (i < j && nums[i] === leftNum) i++
            } else {
                res.push([nums[i], nums[j]])
                while (i < j && nums[i] === leftNum) i++
                while (i < j && nums[j] === rightNum) j--
            }
        }
    } else if (n > 2) {
        for (let i = start; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            const tuples = nSum(nums, n - 1, i + 1, target - nums[i])
            tuples.forEach(tuple => {
                res.push([nums[i], ...tuple])
            })
        }
    } else {
        // n<2
        // error
    }
    return res
}


// function threeSum(nums) {
//     nums.sort((a, b) => a - b)
//     const target = 0, res = []
//     for (let i = 0; i <= nums.length - 3; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue;
//         const items = twoSum(nums, i + 1, target - nums[i])
//         if (items.length > 0) {
//             items.forEach(item => {
//                 res.push([nums[i], ...item])
//             })
//         }
//     }
//     return res
// }
// function twoSum(nums, start, target) {
//     const set = new Set(), res = []
//     for (let i = start; i < nums.length; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue
//         if (set.has(target - nums[i])) {
//             res.push([target - nums[i], nums[i]])
//         }
//         set.add(nums[i])
//     }
//     return res
// }

console.log(threeSum([0, 0, 0, 0]))