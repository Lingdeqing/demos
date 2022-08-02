// NC18 顺时针旋转矩阵
// https://www.nowcoder.com/practice/2e95333fbdd4451395066957e24909cc?tpId=188&&tqId=38565&rp=1&ru=/activity/oj&qru=/ta/job-code-high-week/question-ranking


function rotateMatrix(mat, n) {
    // 沿对角线 \ 翻转
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]]
        }
    }

    // 沿中线 | 翻转
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < Math.floor(n / 2); j++) {
            [mat[i][j], mat[i][n - j - 1]] = [mat[i][n - j - 1], mat[i][j]]
        }
    }
    return mat
}