// 22. 括号生成
// https://leetcode.cn/problems/generate-parentheses/

function generateParenthesis(n) {
    let left = 0, right = 0, res = []
    function backtrack(path, index) {
        if (left < right || left > n) {
            return
        }
        if (index === 2 * n) {
            res.push(path)
            return
        }

        for (let ch of ['(', ')']) {
            if (ch === '(') left++;
            if (ch === ')') right++;
            backtrack(path + ch, index + 1)
            if (ch === '(') left--;
            if (ch === ')') right--;
        }
    }
    backtrack('', 0)
    return res
}

console.log(generateParenthesis(1))