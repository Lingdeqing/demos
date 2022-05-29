// https://www.nowcoder.com/practice/12e081cd10ee4794a2bd70c7d68f5507


// 比马拉车还牛😄
// 讨论区可以做到O(n) https://www.nowcoder.com/practice/12e081cd10ee4794a2bd70c7d68f5507?tpId=37&tqId=21308&rp=1&ru=/exam/oj/ta&qru=/exam/oj/ta&sourceUrl=%2Fexam%2Foj%2Fta%3Fdifficulty%3D2%26judgeStatus%3D3%26page%3D1%26pageSize%3D50%26search%3D%26tpId%3D37%26type%3D37&difficulty=2&judgeStatus=3&tags=&title=
// 另一种是（时间复杂度为O（n）。）：
// 理论支持：每当增加一个新的字母，最大回文串的长度只能增加1或者2，不可能增加更多，并且，新的最大回文串必然要包含这个字母！
// 证明：如果新增了一个字母，最大回文串的长度增加了3，这是不可能的，例如：abcdefgfedcba，当增加到最后的b或者a时，是不可能增加3个长度的，因为每增加一个字母，前面必然已经存在一个回文子串，且长度比新串小1或者小2.
// 所以，从头到尾扫描字符串，每增加一个新的字符，判断以这个字符结尾，且长度为maxLen+1或者maxLen+2的子串是否为回文，如果是，更新最大回文子串。代码如下：

// O(n^2)
function longestHuiwen(str = '') {
    let res = 0
    for (let i = 0; i < str.length; i++) {
        res = Math.max(res, huiwen(str, i, i))
        if (i + 1 < str.length) {
            res = Math.max(res, huiwen(str, i, i + 1))
        }
    }
    return res
}
function huiwen(str, i, j) {
    while (i >= 0 && j < str.length && str[i] === str[j]) {
        i--;
        j++
    }
    return j - i - 1
}