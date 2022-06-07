// 1358. 包含所有三种字符的子字符串数目
// https://leetcode.cn/problems/number-of-substrings-containing-all-three-characters/


function numberOfSubstrings(s) {
    let i = 0, j = 0, a = 0, b = 0, c = 0, res = 0
    while (j < s.length) {
        if (s[j] === 'a') a++
        if (s[j] === 'b') b++
        if (s[j] === 'c') c++
        j++


        while (a > 0 && b > 0 && c > 0) {
            // 统计一次结果
            res += s.length - (j - 1)
            if (s[i] === 'a') a--
            if (s[i] === 'b') b--
            if (s[i] === 'c') c--
            i++
        }
    }
    return res
}
console.log(numberOfSubstrings('eaaacbf'))