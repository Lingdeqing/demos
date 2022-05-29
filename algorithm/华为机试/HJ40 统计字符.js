// https://www.nowcoder.com/practice/539054b4c33b4776bc350155f7abd8f5


function countChar(str = '') {
    let res = [0, 0, 0, 0]
    for (let ch of str) {
        if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
            res[0]++
        } else if (ch === ' ') {
            res[1]++
        } else if (ch >= '0' && ch <= '9') {
            res[2]++
        } else {
            res[3]++
        }
    }
    return res
}