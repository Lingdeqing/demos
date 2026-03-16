// 22. 括号生成

// 回溯模版
// 添加完成后：左括号数量=右括号数量
// 添加的过程中：左括号 不能小于 右侧括号
function generateParenthesis(n) {
    const res = [];
    let left = 0, right = 0;
    function backtrack(path, index) {
        if (left < right) return;
        if (index === n * 2) {
            // 结束
            if (left === right) {
                res.push(path.join(''))
            }
            return
        }

        const chooseList = ['(', ')']
        for (let i = 0; i < chooseList.length; i++) {
            const ch = chooseList[i]
            path.push(ch)
            if (ch === '(') left++;
            else right++;
            backtrack(path, index + 1)
            path.pop()
            if (ch === '(') left--;
            else right--;
        }
    }
    backtrack([], 0)
    return res
}