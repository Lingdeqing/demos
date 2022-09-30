// 384. 打乱数组
// https://leetcode.cn/problems/shuffle-an-array/


/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.nums = nums
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.nums
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    const res = Array.from(this.nums)
    for (let i = 0; i < this.nums.length; i++) {
        const rand = i + Math.floor(Math.random() * (this.nums.length - i));
        [res[rand], res[i]] = [res[i], res[rand]];
    }
    return res
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

a = new Solution([1, 2, 3])
a.shuffle()