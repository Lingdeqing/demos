// 图形题解
// https://leetcode.cn/problems/next-permutation/solution/xia-yi-ge-pai-lie-suan-fa-xiang-jie-si-lu-tui-dao-/

var nextPermutation = function (nums) {
    let i = nums.length - 2, j = nums.length - 1;

    // 从后到前 找到第一个逆序
    while (i >= 0 && nums[i] >= nums[j]) {
        i--; j--;
    }

    // 从后到前 找到第一个大于第i的元素 进行交换
    if (i >= 0) {
        for (let k = nums.length - 1; k >= j; k--) {
            if (nums[k] > nums[i]) {
                [nums[k], nums[i]] = [nums[i], nums[k]];
                break;
            }
        }
    }

    // j到最后再 调整成正序
    for (let k = nums.length - 1; k > j; k--, j++) {
        [nums[k], nums[j]] = [nums[j], nums[k]];
    }
};

console.log(nextPermutation([2, 3, 1]))