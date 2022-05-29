// https://www.nowcoder.com/practice/8f3df50d2b9043208c5eed283d1d4da6


function parseInt1(hex = '') {
    // return parseInt(hex, 16)
    let res = 0;
    const aCode = 'A'.charCodeAt(0)
    for (let i = 2; i < hex.length; i++) {
        const cur = !isNaN(+hex[i]) ? +hex[i] : (hex.charCodeAt(i) - aCode + 10)
        res = res * 16 + cur
    }
    return res
}