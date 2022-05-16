// 11. 盛最多水的容器

// 双指针
function maxArea(height) {
    let i = 0, j = height.length - 1, max = 0
    while (i < j) {
        const area = Math.min(height[i], height[j]) * (j - i)
        if (max < area) {
            max = area
        }
        if (height[i] < height[j]) {
            i++
        } else {
            j--
        }
    }
    return max
}
