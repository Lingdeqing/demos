// https://www.nowcoder.com/practice/8c949ea5f36f422594b306a2300315da

function lastWordLength(str) {
    const words = str.split(' ')
    return words[words.length - 1].length
}


function lastWordLength(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === ' ') {
            return str.length - i - 1
        }
    }
    return str.length
}