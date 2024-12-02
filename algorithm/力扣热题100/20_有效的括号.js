/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const st = []
    const map = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    for (let ch of s) {
        if (map[ch]) { // 左括号
            st.push(ch)
        } else {
            if (st.length === 0 || map[st.pop()] !== ch) return false
        }
    }
    return st.length === 0
};