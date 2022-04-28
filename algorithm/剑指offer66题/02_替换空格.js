/**
    题目：
        请实现一个函数，将一个字符串中的空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
 */
function encodeSpace(str) {
    return str.replace(/\s/g, '%20')
}


function encodeSpace2(str) {
    let counter = 0
    for (let c of str) {
        if (c === ' ') {
            counter++
        }
    }

    const ab = new Array(str.length + counter * 3)
    for (let i = str.length - 1, j = ab.length - 1; i >= 0; i--, j--) {
        if (str[i] === ' ') {
            ab[j] = '0'
            ab[--j] = '2'
            ab[--j] = '%'
        } else {
            ab[j] = str[i]
        }
    }

    return ab.join('')
}