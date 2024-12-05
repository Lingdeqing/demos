/**
 * @param {number[]} nums
 * @return {number}
 */
//宫水三叶： https://leetcode.cn/problems/shortest-unsorted-continuous-subarray/solutions/912231/gong-shui-san-xie-yi-ti-shuang-jie-shuan-e1le/?envType=problem-list-v2&envId=2cktkvj
var findUnsortedSubarray = function (nums) {
    let i = 0, j = nums.length - 1;
    while (i < j && nums[i] <= nums[i + 1]) i++
    while (i < j && nums[j] >= nums[j - 1]) j--

    let min = nums[i]
    let max = nums[j]
    for (let k = i; k <= j; k++) {
        if (nums[k] < min) {
            while (i >= 0 && nums[k] < nums[i]) i--
            min = i >= 0 ? nums[i] : -Infinity
        }
        if (nums[k] > max) {
            while (j < nums.length && nums[k] > nums[j]) j++
            max = j < nums.length ? nums[j] : Infinity
        }
    }
    return i === j ? 0 : (j - 1) - (i + 1) + 1

};

var findUnsortedSubarray = function (nums) {
    const copy = [...nums].sort((a, b) => a - b)
    let start = 0, end = nums.length - 1
    while (start < nums.length && nums[start] === copy[start]) start++
    while (end >= 0 && nums[end] === copy[end]) end--
    return Math.max(0, end - start)
};
console.log(findUnsortedSubarray([1, 3, 2, 2, 2]



))