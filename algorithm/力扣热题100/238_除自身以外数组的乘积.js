// 上三角和下三角 https://leetcode.cn/problems/product-of-array-except-self/solutions/11472/product-of-array-except-self-shang-san-jiao-xia-sa/?envType=problem-list-v2&envId=2cktkvj
var productExceptSelf = function (nums) {
    const res = new Array(nums.length).fill(1);
    // 下三角
    for (let i = 1; i < nums.length; i++) {
        res[i] = nums[i - 1] * res[i - 1]
    }
    // 上三角
    let temp = 1
    for (let i = nums.length - 2; i >= 0; i--) {
        temp *= nums[i + 1]
        res[i] *= temp
    }
    return res;
};

//   a0 a1 a2 a3

// b0 1  * a1 * a2 * a3
// b1 a0 * 1  * a2 * a3
// b2 a0 * a1 * 1  * a3
// b3 a0 * a1 * a2 * 1