/**
    题目：
    请实现一个函数用来匹配包括'.'和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。 在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配
 */

// time: 
// space:

// 递归
function isMatch(s, p) {
    if (s.length === 0) {
        if (p.length % 2 === 1) return false;
        for (let i = 1; i < p.length; i += 2) {
            if (p[i] !== '*') return false
        }
        return true
    }
    if (p.length === 0) return false;

    let a = s[0], b = p[0], c = ''
    if (p.length > 1) {
        c = p[1]
    }
    if (c !== '*') { // 没有量词
        if (a === b || b === '.') { // 判断当前字符是否匹配
            return isMatch(s.slice(1), p.slice(1))
        } else {
            return false
        }
    } else {
        // 有量词
        if (a === b || b === '.') {
            return isMatch(s.slice(1), p) || isMatch(s, p.slice(2))
        } else {
            return isMatch(s, p.slice(2))
        }
    }
}


// 动态规划-自底向上
function isMatch(s, p) {
    const m = s.length + 1, n = p.length + 1 // dp[x][y] 代表长度x的s与长度y的p匹配，包含空串，所以得是 串长度+1
    // 初始化状态
    const dp = new Array(m)
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n).fill(false)
    }

    // 空字符串 匹配 空正则
    dp[0][0] = true;

    // 空字符串 匹配 非空正则，奇数长度正则无法匹配
    for (let y = 2; y < n; y += 2) {
        dp[0][y] = dp[0][y - 2] && p[y - 1] === '*'
    }

    let x = 1;
    while (x < m) {
        let y = 1;
        while (y < n) {
            if (p[y - 1] === '*') {
                let result = false
                // *表示0个
                if (y >= 2) {
                    result ||= dp[x][y - 2]
                }

                // *不表示0个
                if (y >= 2 && (p[y - 2] === s[x - 1] || p[y - 2] === '.')) {
                    result ||= dp[x - 1][y]
                }

                dp[x][y] = result;
            } else {
                if (p[y - 1] === s[x - 1] || p[y - 1] === '.') {
                    dp[x][y] = dp[x - 1][y - 1]
                }
            }
            y++
        }
        x++
    }

    return dp[s.length][p.length]
}


// 迭代，写不了，迭代得改成动态规划，推算方程
function isMatch(s, p) {
    let i = s.length - 1, j = p.length - 1;
    while (i < s.length && j < p.length) {
        const a = s[i], b = s[j], c = ''
        if (j + 1 < p.length) {
            c = p[j + 1]
        }
        if (c !== '*') { // 没有量词
            if (a === b || b === '.') { // 判断当前字符是否匹配
                i++;
                j++;
            } else {
                return false
            }
        } else {
            // 有量词
            if (a === b || b === '.') {
                i++ // 这边也可以跳过，没法用迭代写了，改成递归吧，因为*可以表示0个
            } else {
                j += 2
            }

        }
    }
    return i === s.length && j === p.length
}


// 自行用状态机实现-正则表达式
function isMatch(s, p) {
    // todo
}

// 正则表达式
function isMatch(s, p) {
    return new RegExp(`^${p}$`).test(s)
}
