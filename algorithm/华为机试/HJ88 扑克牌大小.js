// https://www.nowcoder.com/practice/d290db02bacc4c40965ac31d16b1c3eb

function compare(input) {
    const [a, b] = input.split('-').map(item => item.split(' '))
    const aType = typeOf(a)
    const bType = typeOf(b)
    if (aType !== bType && aType !== '炸弹' && aType !== '对王' && bType !== '炸弹' && bType !== '对王') {
        return 'ERROR'
    }
    if (aType === '对王' || (aType === '炸弹' && bType !== '炸弹' && bType !== '对王')) {
        return a.join(' ')
    }
    if (bType === '对王' || (bType === '炸弹' && aType !== '炸弹' && aType !== '对王')) {
        return b.join(' ')
    }
    const map = {
        J: 11,
        Q: 12,
        K: 13,
        A: 14,
        joker: 15,
        JOKER: 16,
    }
    return (+a[0] || map[a[0]]) > (+b[0] || map[b[0]]) ? a.join(' ') : b.join(' ')
}
function typeOf(card) {
    if (card.length === 1) return '个子'
    if (card.length === 2) {
        if (card[0] === card[1]) return '对子'
        return '对王'
    }
    if (card.length === 5) return '顺子'
    if (card.length === 3) return '三个'
    if (card.length === 4) return '炸弹'
}

console.log(compare('4 4 4 4-joker JOKER'))