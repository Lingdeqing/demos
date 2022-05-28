// https://www.nowcoder.com/practice/a30bbc1a0aca4c27b86dd88868de4a4a

function slice(str, k) {
    // return str.slice(0, k)
    let res = ''
    for (let i = 0; i < k && i < str.length; i++) {
        res += str[i]
    }
    return res
}

