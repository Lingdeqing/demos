// 498. 对角线遍历
// https://leetcode.cn/problems/diagonal-traverse/


// 模拟：https://leetcode.cn/problems/diagonal-traverse/solution/by-ac_oier-yw5x/
var findDiagonalOrder = function (mat) {
    if (mat.length === 0 || mat[0].length === 0) return []
    let i = 0, j = 0, res = [], dir = 1
    let m = mat.length, n = mat[0].length, count = m * n
    while (res.length < count) {
        res.push(mat[i][j])
        if (dir === 1) {
            i--;
            j++;
        } else {
            i++;
            j--;
        }
        if (res.length < count && (i < 0 || j < 0 || i >= m || j >= n)) {
            if (dir === 1) {
                if (j >= n) { // 右侧越届
                    i += 2
                    j--;
                } else { // 上侧越届
                    i++;
                }
            } else {
                if (i >= m) {// 下侧越届
                    j += 2
                    i--;
                } else {// 左侧越届
                    j++;
                }
            }
            dir *= -1;
        }
    }
    return res
};

console.log(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))