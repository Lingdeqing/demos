var longestConsecutive = function (nums) {
    nums.sort((a, b) => a - b);
    let prev = -Infinity
    let len = 0
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === prev) continue
        if (nums[i] === prev + 1) {
            prev++;
            len++
        } else {
            prev = nums[i]
            len = 1
        }
        res = Math.max(len, res)
    }
    return res
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const set = new Set(nums)
    let res = 0
    for (let num of set) {
        if (set.has(num - 1)) continue;

        let counter = 1;
        while (set.has(num + 1)) {
            num++
            counter++
        }
        res = Math.max(res, counter)
    }
    return res
};

longestConsecutive([1, 2, 0, 1])