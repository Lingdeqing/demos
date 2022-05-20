// https://www.nowcoder.com/practice/e4af1fe682b54459b2a211df91a91cf3

function encode(key, str) {
    key = key.toLowerCase()
    const map = [], used = {}
    for (let i = 0, j = 0; i < key.length; i++) {
        if (used[key[i]]) continue;
        used[key[i]] = true;
        map[j++] = key[i]
    }
    const aCode = 'a'.charCodeAt(0)
    for (let i = 0; i < 26; i++) {
        const ch = String.fromCharCode(i + aCode)
        if (!used[ch]) {
            map.push(ch)
        }
    }

    // 编码
    let res = ''
    for (let ch of str) {
        if (ch === ' ') {
            res += ch
        } else if (ch >= 'A' && ch <= 'Z') {
            res += map[ch.toLowerCase().charCodeAt(0) - aCode].toUpperCase()
        } else {
            res += map[ch.charCodeAt(0) - aCode]
        }
    }
    return res;
}
