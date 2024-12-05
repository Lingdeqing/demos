/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let i = 0, j = height.length - 1;
    let res = 0;
    while (i < j) {
        res = Math.max(res, (j - i) * Math.min(height[i], height[j]))
        if (height[i] < height[j]) {
            i++
        } else {
            j--
        }
    }
    return res
};