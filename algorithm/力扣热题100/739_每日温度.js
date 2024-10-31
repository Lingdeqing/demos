// 单调栈
var dailyTemperatures = function (temperatures) {
    const res = [], stack = [];
    for (let i = temperatures.length - 1; i >= 0; i--) {
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
            stack.pop()
        }
        res[i] = stack.length > 0 ? stack[stack.length - 1] - i : 0;
        stack.push(i)
    }
    return res;
};