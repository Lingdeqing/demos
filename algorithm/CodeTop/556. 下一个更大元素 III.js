// 556. 下一个更大元素 III
// https://leetcode.cn/problems/next-greater-element-iii/


function nextGreaterElement(n) {
    let nums = n.toString().split('').map(num => +num)
    nextPermutation(nums)
    let res = +nums.join('')
    return res > n && res <= 2 ** 31 - 1 ? res : -1
}

function nextPermutation(nums) {
    if (nums.length <= 1) return
    let i = nums.length - 2, j = nums.length - 1;

    // 从后到前 找到第一个逆序
    while (i >= 0 && nums[i] >= nums[j]) {
        i--;
        j--;
    }

    // 从后到前 找到第一个大于第i的元素 进行交换
    if (i >= 0) { // 不是整体逆序
        for (let k = nums.length - 1; k >= j; k--) {
            if (nums[k] > nums[i]) {
                ;[nums[k], nums[i]] = [nums[i], nums[k]];
                break
            }
        }
    }

    // 后面的倒序 调整成正序
    for (let k = nums.length - 1; k > j; k--, j++) {
        ;[nums[k], nums[j]] = [nums[j], nums[k]];
    }
}

console.log(nextGreaterElement(21))