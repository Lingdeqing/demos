// https://www.nowcoder.com/practice/88ddd31618f04514ae3a689e83f3ab8e


function zishou(n) {
    let res = 0;
    for (let i = 0; i <= n; i++) {
        if ((i * i).toString().endsWith(i.toString())) {
            res++
        }
    }
    return res
}

console.log(zishou(81))