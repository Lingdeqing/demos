// 396. 旋转函数
// https://leetcode.cn/problems/rotate-function/

// 超时啦
function maxRotateFunction(nums) {
    let res = -Infinity
    for (let k = 0; k < nums.length; k++) {
        let sum = 0
        for (let i = 0; i < nums.length; i++) {
            sum += nums[(i - k + nums.length) % nums.length] * i
        }
        res = Math.max(res, sum)
    }
    return res
}


// nums: [A0,A1,A2,A3]

// F0 = 0*A0 + 1*A1 + 2*A2 + 3*A3

// F1 = 0*A3 + 1*A0 + 2*A1 + 3*A2 
//    = F0 + A0 + A1 + A2 - 3*A3 
//    = F0 + sum-A3 - 3*A3 
//    = F0 + sum - 4*A3

// F2 = 0*A2 + 1*A3 + 2*A0 + 3*A1 
//    = F1 + A0 + A1 + A3 - 3*A2 
//    = F1 + sum - 4*A2

// F3 = 0*A1 + 1*A2 + 2*A3 + 3*A0 
//    = F2 + A2 + A3 + A0 - 3*A1 
//    = F2 + sum - 4*A1
// 找规律
// f(k) = f(k-1)+sum-n*A[n-k]

function maxRotateFunction(nums) {
    let sum = 0, f = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        f += i * nums[i]
    }

    let res = f
    for (let k = 1; k < nums.length; k++) {
        f = f + sum - nums.length * nums[nums.length - k]
        res = Math.max(res, f)
    }
    return res
}