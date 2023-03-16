// 997. 找到小镇的法官
// https://leetcode.cn/problems/find-the-town-judge/


var findJudge = function (n, trust) {
    let sum = new Array(n).fill(0)
    for (let [i, j] of trust) {
        sum[i - 1] = -Infinity
        sum[j - 1] += 1
    }
    for (let i = 0; i < n; i++) {
        if (sum[i] === n - 1) {
            return i + 1
        }
    }
    return -1
};

// 出度入度题
var findJudge = function (n, trust) {
    let _in = new Array(n + 1).fill(0), out = new Array(n + 1).fill(0)
    for (let [i, j] of trust) {
        _in[j]++;
        out[i]++;
    }
    for (let i = 1; i <= n; i++) {
        if (_in[i] === n - 1 && out[i] === 0) {
            return i
        }
    }
    return -1
};
findJudge(2,
    [[1, 2]])