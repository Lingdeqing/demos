// 快速选择算法
var findKthLargest = function (nums, k) {
    shuffle(nums);
    function quickSort(nums, lo, hi) {
        if (lo > hi) return;

        let i = lo, j = hi;
        while (i < j) {
            while (i < j && nums[j] <= nums[lo]) j--;
            while (i < j && nums[i] >= nums[lo]) i++;
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }

        [nums[lo], nums[i]] = [nums[i], nums[lo]];

        if (i == k - 1) {
            // 第k个元素排到了第k个位置
        } else if (i > k - 1) {
            quickSort(nums, lo, i - 1);
        } else {
            quickSort(nums, i + 1, hi);
        }
    }
    quickSort(nums, 0, nums.length - 1)
    return nums[k - 1]
};
function shuffle(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
}