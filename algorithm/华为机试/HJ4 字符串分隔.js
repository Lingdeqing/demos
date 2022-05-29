// https://www.nowcoder.com/practice/d9162298cb5a437aad722fccccaae8a7


function split(str = '') {
    let group = []

    for (let i = 0; i < str.length; i += 8) {
        group.push(str.slice(i, i + 8))
    }
    if (group[group.length - 1].length < 8) {
        group[group.length - 1] = group[group.length - 1].padEnd(8, '0')
    }
    return group
}