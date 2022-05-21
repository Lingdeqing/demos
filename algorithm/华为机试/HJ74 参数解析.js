// https://www.nowcoder.com/practice/668603dc307e4ef4bb07bcd0615ea677

function parse(s) {
    let i = 0, res = [], param = ''
    while (i < s.length) {
        if (s[i] === '"') {
            i++;
            param = ''
            while (i < s.length&&s[i] !== '"') {
                param += s[i]
                i++
            }
            i++;
            res.push(param)
        } else if (s[i] !== ' ') {
            param = ''
            while (i < s.length&&s[i] !== ' ') {
                param += s[i]
                i++;
            }
            res.push(param)
        } else {
            i++
        }
    }
    return res
}
