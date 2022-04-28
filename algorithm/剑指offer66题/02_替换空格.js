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