// https://www.nowcoder.com/practice/769d45d455fe40b385ba32f97e7bcded

function getDay(date) {
    const [y, m, d] = date;
    const days = [31, (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let res = d;
    for (let i = 0; i < m - 1; i++) {
        res += days[i]
    }
    return res
}