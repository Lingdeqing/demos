// https://www.nowcoder.com/practice/e8480ed7501640709354db1cc4ffd42a

// 滑动窗口模版
function maxCG(str, n) {
    let max = 0, res = '', i = 0, j = 0, cNum = 0, gNum = 0;
    while (j < str.length) {
        // 增大窗口
        if (str[j] === 'C') cNum++;
        if (str[j] === 'G') gNum++;
        j++;

        // 收缩窗口
        if (j - i === n) {
            // 统计结果
            if (gNum + cNum > max) {
                max = gNum + cNum;
                res = str.slice(i, j);
            }
            if (max === n) { // GC-ratio = 1
                // 提前结束
                return str.slice(i, j);
            }
            if (str[i] === 'C') cNum--;
            if (str[i] === 'G') gNum--;
            i++;
        }
    }
    return res;
}

