// 859. 亲密字符串
// https://leetcode.cn/problems/buddy-strings/


function buddyStrings(s, goal) {
    if (s.length !== goal.length || s.length < 2) return false
    let diff = [], set = new Set()
    for (let k = 0; k < s.length; k++) {
        set.add(s[k])
        if (s[k] === goal[k]) continue
        if (diff.length > 2) return false
        diff.push(k)
    }
    return (diff.length === 0 && set.size < s.length) || (diff.length === 2 && s[diff[0]] === goal[diff[1]] && s[diff[1]] === goal[diff[0]])
};

console.log(buddyStrings('aa', 'aa'))