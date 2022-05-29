// https://www.nowcoder.com/practice/81544a4989df4109b33c2d65037c5836

function reverseSentense(str) {
    // return str.replace(/[^a-zA-Z]+/g, ' ').split(' ').reverse().join(' ')
    return str.split(/[^a-zA-Z]+/).reverse().join(' ')
}