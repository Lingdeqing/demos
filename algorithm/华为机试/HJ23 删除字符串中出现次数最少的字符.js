// https://www.nowcoder.com/practice/05182d328eb848dda7fdd5e029a56da9

function removeLeast(str) {
    const map = {}
    for (let ch of str) {
        map[ch] = (map[ch] || 0) + 1
    }
    let res = '', min = Math.min(...Object.values(map))
    for (let ch of str) {
        if (map[ch] !== min) {
            res += ch
        }
    }
    return res
}
console.log(removeLeast('assssa'))