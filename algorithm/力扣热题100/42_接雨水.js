/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const left = []
    let max = -Infinity
    for (let i = 0; i < height.length; i++) {
        left[i] = max
        max = Math.max(max, height[i])
    }
    const right = []
    max = -Infinity
    for (let i = height.length - 1; i >= 0; i--) {
        right[i] = max
        max = Math.max(max, height[i])
    }

    let res = 0
    for (let i = 1; i < height.length - 1; i++) {
        res += Math.max(0, Math.min(left[i], right[i]) - height[i])
    }
    return res
};


var trap = function (height) {
    let i = 0, j = height.length - 1
    let leftMax = 0, rightMax = 0
    let res = 0
    while (i <= j) {
        leftMax = Math.max(leftMax, height[i])
        rightMax = Math.max(rightMax, height[j])

        if (leftMax < rightMax) {
            res += Math.max(0, leftMax - height[i])
            i++;
        } else {
            res += Math.max(0, rightMax - height[j])
            j--;
        }
    }
    return res
};