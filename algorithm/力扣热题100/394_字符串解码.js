/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {


    function recur(s, i) {
        let repeat = 0
        let res = ''
        let subRes
        while (i < s.length) {
            if (s[i] >= '0' && s[i] <= 9) {
                repeat = repeat * 10 + +s[i]
            } else if (s[i] === '[') {
                [subRes, i] = recur(s, i + 1)
                res += subRes.repeat(repeat)
                repeat = 0
            } else if (s[i] === ']') {
                return [res, i]
            } else {
                res += s[i]
            }
            i++
        }
        return res
    }
    return recur(s, 0)
};