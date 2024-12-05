/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    return nSum(nums, 3, 0)
};
function nSum(nums, n, target) {
    if (n < 2) return [];
    if (n === 2) {
        const res = []
        let i = 0, j = nums.length - 1;
        while (i < j) {
            const sum = nums[i] + nums[j]
            if (sum > target) {
                j--
            } else if (sum < target) {
                i++
            } else if (sum === target) {
                res.push([nums[i], nums[j]])
                const leftNum = nums[i];
                const rightNum = nums[j];
                while (i < j && leftNum === nums[i]) i++;
                while (i < j && rightNum === nums[j]) j--;
            }
        }

        return res
    } else {
        const res = []
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue
            const num = nums[i];
            const arrs = nSum(nums.slice(i + 1), n - 1, target - num)
            res.push(...arrs.map(items => [num, ...items]))
        }
        return res
    }
}
