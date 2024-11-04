// 暴力法
var maximalSquare = function (matrix) {
    if (matrix.length === 0) return 0;
    const rows = matrix.length;
    const columns = matrix[0].length;
    let maxSide = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === '0') continue

            maxSide = Math.max(maxSide, 1); // 边长为1的正方形

            // 以当前位置作为正方形的左上角，检查其他位置是否都是1
            const currentMaxSide = Math.min(rows - i, columns - j);
            for (let k = 1; k < currentMaxSide; k++) {
                // 右下角是0
                if (matrix[i + k][j + k] === '0') break;

                let isSquare = true;
                for (let m = 0; m < k; m++) {
                    if (matrix[i + k][j + m] === '0' || matrix[i + m][j + k] === '0') {
                        isSquare = false
                        break;
                    }
                }
                if (isSquare) {
                    maxSide = Math.max(maxSide, k + 1);
                } else {
                    break;
                }
            }
        }
    }
    return maxSide * maxSide
};


// dp
var maximalSquare = function (matrix) {
    if (matrix.length === 0) return 0;
    let maxSide = 0;

    const rows = matrix.length;
    const columns = matrix[0].length;
    const dp = Array.from({ length: rows }, () => new Array(columns).fill(0))


    // 最左边一列
    for (let i = 0; i < rows; i++) {
        dp[i][0] = matrix[i][0] === '1' ? 1 : 0;
        maxSide = Math.max(dp[i][0], maxSide);
    }
    // 最上边一列
    for (let i = 0; i < columns; i++) {
        dp[0][i] = matrix[0][i] === '1' ? 1 : 0;
        maxSide = Math.max(dp[0][i], maxSide);
    }

    // 递推
    // dp[i][j] 表示[i,j]位置元素为右下角的正方形的最大的边长
    // dp[i][j] = matrix[i][j] === '1' ? Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])+1 : 0
    // 自己画图就可以总结出来
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < columns; j++) {
            dp[i][j] = matrix[i][j] === '1' ? Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1 : 0
            maxSide = Math.max(dp[i][j], maxSide);
        }
    }

    return maxSide * maxSide
};

maximalSquare([["1", "0", "1", "0"], ["1", "0", "1", "1"], ["1", "0", "1", "1"], ["1", "1", "1", "1"]])