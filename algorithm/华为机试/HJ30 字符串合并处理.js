//https://www.nowcoder.com/practice/d3d8e23870584782b3dd48f26cb39c8f

function mergeStr(s1, s2) {
    // 合并
    const s = (s1 + s2).split('')

    // 排序 
    const odd = [], even = []
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) even.push(s[i])
        else odd.push(s[i])
    }
    odd.sort()
    even.sort()
    for (let i = 0; i < odd.length; i++) {
        s[i * 2 + 1] = odd[i]
    }
    for (let i = 0; i < even.length; i++) {
        s[i * 2] = even[i]
    }

    // 编码
    const map = new Array(16)
    for (let i = 0; i < 16; i++) {
        const b1 = [0, 0, 0, 0]
        const b2 = i.toString(2).split('')
        for (let i = b2.length - 1, j = 0; i >= 0; i--, j++) {
            b1[j] = b2[i]
        }
        map[i] = parseInt(b1.join(''), 2).toString(16).toUpperCase()
    }
    const zCode = '0'.charCodeAt(0), aCode = 'a'.charCodeAt(0)
    for (let i = 0; i < s.length; i++) {
        const ch = s[i].toLowerCase()
        if (ch >= '0' && ch <= '9') {
            s[i] = map[ch.charCodeAt(0) - zCode]
        } else if (ch >= 'a' && ch <= 'f') {
            s[i] = map[ch.charCodeAt(0) - aCode + 10]
        }
    }

    return s.join('')
}

console.log(mergeStr('dec', 'fab'))