// 31. 下一个排列
// 图形题解
// https://leetcode.cn/problems/next-permutation/solution/xia-yi-ge-pai-lie-suan-fa-xiang-jie-si-lu-tui-dao-/

// 将一个左边的「较小数」与一个右边的「较大数」交换
// 这个「较小数」尽量靠右，而「较大数」尽可能小
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