/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    for (let n of nums) {
        n = Math.abs(n)
        if (nums[n - 1] < 0) {
            for (let i = 0; i < nums[i]; i++) {
                nums[i] = Math.abs(nums[i])
            }
            return n
        }
        nums[n - 1] = -1 * nums[n - 1]
    }
    return 0
};
console.log(findDuplicate([2, 1, 1]

))

// 转换为环形链表入口 https://leetcode.cn/problems/find-the-duplicate-number/solutions/58841/287xun-zhao-zhong-fu-shu-by-kirsche
var findDuplicate2 = function (nums) {
    let slow = 0, fast = 0
    while (true) {
        slow = nums[slow]
        fast = nums[nums[fast]]
        if (slow === fast) {
            slow = 0;
            while (true) {
                slow = nums[slow]
                fast = nums[fast]
                if (slow === fast) {
                    return slow
                }
            }
            break
        }
    }
};
