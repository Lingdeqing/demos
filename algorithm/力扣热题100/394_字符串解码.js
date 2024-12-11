/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    function recur(i) {
        let count = 0
        let res = ''
        let subRes = ''
        while (i < s.length) {
            if (s[i] >= '0' && s[i] <= '9') {
                count = count * 10 + 1 * s[i]
            } else if (s[i] === '[') {
                [subRes, i] = recur(i + 1)
                res += subRes.repeat(count)
                count = 0
            } else if (s[i] === ']') {
                return [res, i]
            } else {
                res += s[i]
            }
            i++
        }
        return res
    }
    return recur(0)
}