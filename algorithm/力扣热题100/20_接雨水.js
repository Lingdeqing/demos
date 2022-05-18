// 42. 接雨水

function trap(height) {
    const leftMax = [], rightMax = [];
    let max = 0;
    for (let h of height) {
        leftMax.push(max)
        max = Math.max(max, h)
    }
    max = 0;
    for (let i = height.length - 1; i >= 0; i--) {
        rightMax[i] = max
        max = Math.max(max, height[i])
    }
    let res = 0
    for (let i = 1; i < height.length - 1; i++) {
        res += Math.max(0, Math.min(leftMax[i], rightMax[i]) - height[i])
    }
    return res
}

// 双指针遍历一遍
function trap(height) {
    if (height.length < 3) return 0
    let leftMax = height[0], rightMax = height.at(-1)
    let i = 1, j = height.length - 2;
    let res = 0
    while (i <= j) {
        if (leftMax < rightMax) { //对于i元素来说leftMax是对的，leftMax只要小于右边一个就可以了
            res += Math.max(0, leftMax - height[i])
            leftMax = Math.max(leftMax, height[i])
            i++
        } else {
            res += Math.max(0, rightMax - height[j])
            rightMax = Math.max(rightMax, height[j])
            j--
        }
    }
    return res
}
