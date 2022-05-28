// https://www.nowcoder.com/practice/dd0c6b26c9e541f5b935047ff4156309


function sort(nums) {
    function quickSort(nums, left, right) {
        if (left >= right) return
        let i = left, j = right;
        while (i < j) {
            while (i < j && nums[j] >= nums[left]) j--;
            while (i < j && nums[i] <= nums[left]) i++;
            ;[nums[i], nums[j]] = [nums[j], nums[i]];
        }
        ;[nums[left], nums[i]] = [nums[i], nums[left]];
        quickSort(nums, left, i - 1)
        quickSort(nums, i + 1, right)
    }
    quickSort(nums, 0, nums.length - 1)
}