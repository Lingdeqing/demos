// 宫水三叶题解 https://leetcode.cn/problems/remove-invalid-parentheses/solutions/1068652/gong-shui-san-xie-jiang-gua-hao-de-shi-f-asu8/
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
    let left = 0, right = 0
    for (let c of s) {
        if (c === '(') left++;
        if (c === ')') right++;
    }

    const max = Math.min(left, right)
    const set = new Set()
    let maxValidLen = 0
    function dfs(s, i, validStr, score) {
        if (score < 0 || score > max) return;
        if (i === s.length) {
            if (score === 0 && validStr.length >= maxValidLen) {
                if (validStr.length > maxValidLen) {
                    set.clear()
                }
                maxValidLen = validStr.length;
                set.add(validStr)
            }
            return
        }

        if (s[i] === '(') {
            dfs(s, i + 1, validStr + s[i], score + 1)
            dfs(s, i + 1, validStr, score)
        } else if (s[i] === ')') {
            dfs(s, i + 1, validStr + s[i], score - 1)
            dfs(s, i + 1, validStr, score)
        } else {
            dfs(s, i + 1, validStr + s[i], score)
        }
    }
    dfs(s, 0, '', 0)
    return [...set.values()]
};


// 剪枝 https://leetcode.cn/problems/remove-invalid-parentheses/solutions/1068652/gong-shui-san-xie-jiang-gua-hao-de-shi-f-asu8/comments/1689413
var removeInvalidParentheses2 = function (s) {
    let maxValidLen = 0;
    let left = 0, right = 0 // 多余的左右括号数量
    for (let c of s) {
        if (c === '(') left++;
        if (c === ')') {
            if (left != 0) left--
            else right++;
        }
    }
    maxValidLen = s.length - (left + right)// 最长有效长度

    let left1 = 0, right1 = 0
    for (let c of s) {
        if (c === '(') left1++;
        if (c === ')') right1++;
    }
    const max = Math.min(left1, right1) // 最多括号对数

    const set = new Set()

    function dfs(s, i, validStr, score, left, right) {
        if (left < 0 || right < 0 || score < 0 || score > max) return;

        if (left === 0 && right === 0 && score === 0) {
            if (validStr.length === maxValidLen) {
                set.add(validStr)
                return
            }
        }

        if (i >= s.length) return

        if (s[i] === '(') {
            dfs(s, i + 1, validStr + s[i], score + 1, left, right)
            dfs(s, i + 1, validStr, score, left - 1, right)
        } else if (s[i] === ')') {
            dfs(s, i + 1, validStr + s[i], score - 1, left, right)
            dfs(s, i + 1, validStr, score, left, right - 1)
        } else {
            dfs(s, i + 1, validStr + s[i], score, left, right)
        }
    }
    dfs(s, 0, '', 0, left, right)
    return [...set.values()]
};

console.log(removeInvalidParentheses2("(a)())()"))