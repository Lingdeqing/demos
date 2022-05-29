// https://www.nowcoder.com/practice/7960b5038a2142a18e27e4c733855dac


function encode(str) {
    let res = ''
    const map = {
        'abc': 2,
        'def': 3,
        'ghi': 4,
        'jkl': 5,
        'mno': 6,
        'pqrs': 7,
        'tuv': 8,
        'wxyz': 9
    }
    const dict = Object.keys(map).reduce((m, key) => {
        for (let ch of key) {
            m[ch] = map[key]
        }
        return m
    }, {})
    for (let ch of str) {
        if (ch >= 'A' && ch <= 'Z') {
            res += String.fromCharCode(
                (ch.charCodeAt(0) - 'A'.charCodeAt(0) + 1) % 26
                + 'a'.charCodeAt(0)
            )
        } else if (ch >= 'a' && ch <= 'z') {
            res += dict[ch]
        } else {
            res += ch
        }
    }
    return res
}